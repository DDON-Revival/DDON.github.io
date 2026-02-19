/* =========================================================
   DDON WIKI V2 – STABLE CLEAN FINAL
========================================================= */

const DATA = {};
let currentTab = "monster";

/* =========================================================
   LOAD DATA
========================================================= */

async function loadJSON(name, path) {
    try {
        const res = await fetch(path);
        DATA[name] = await res.json();
    } catch (e) {
        console.log("Failed loading:", name);
        DATA[name] = {};
    }
}

async function loadCSV(name, path) {
    try {
        const res = await fetch(path);
        const text = await res.text();
        DATA[name] = text.split("\n").slice(1).map(r => r.split(","));
    } catch {
        DATA[name] = [];
    }
}

async function loadAll() {

    await loadJSON("EnemySpawn", "datas/EnemySpawn.json");
    await loadJSON("EnemyNames", "datas/enemy-names.json");
    await loadJSON("StageNames", "datas/stage-names.json");
    await loadJSON("Items", "datas/item_names.json");
    await loadJSON("Shops", "datas/Shop.json");
    await loadJSON("ShopNames", "datas/shop-names.json");
    await loadJSON("Special", "datas/SpecialShops.json");
    await loadJSON("Crafting", "datas/CraftingRecipes.json");
    await loadJSON("CraftingPlus", "datas/CraftingRecipesGradeUp.json");
    await loadCSV("Gathering", "datas/GatheringItem.csv");

    await loadQuests();

    renderHome();
}

loadAll();

/* =========================================================
   QUEST LOADER (index.json)
========================================================= */

async function loadQuests() {
    try {
        const res = await fetch("questwiki/index.json");
        const list = await res.json();

        DATA.Quests = [];

        for (const file of list) {
            try {
                const r = await fetch("questwiki/" + file);
                const q = await r.json();
                DATA.Quests.push(q);
            } catch {}
        }
    } catch {
        DATA.Quests = [];
    }
}

/* =========================================================
   HELPERS
========================================================= */

function getItemName(id) {
    if (!DATA.Items || !DATA.Items.item) return id;
    const found = DATA.Items.item.find(i => String(i.id) === String(id));
    return found ? found.new : id;
}

function getEnemyName(id) {
    return DATA.EnemyNames?.[id] || id;
}

function getStageName(id) {
    return DATA.StageNames?.[id]?.en || id;
}

function getShopNames(id) {
    return DATA.ShopNames?.[id] || ["Shop " + id];
}

function card(title, html) {
    return `
        <div class="card">
            <h3>${title}</h3>
            ${html || ""}
        </div>
    `;
}

/* =========================================================
   TAB SWITCH
========================================================= */

document.querySelectorAll(".tabs button").forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll(".tabs button")
            .forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentTab = btn.dataset.tab;
        renderHome();
    };
});

document.getElementById("searchBox")
    .addEventListener("input", renderHome);

/* =========================================================
   ROUTER
========================================================= */

function renderHome() {
    const value =
        document.getElementById("searchBox").value.toLowerCase();

    if (currentTab === "monster") renderMonsters(value);
    if (currentTab === "item") renderItems(value);
    if (currentTab === "stage") renderStages(value);
    if (currentTab === "shop") renderShops();
    if (currentTab === "special") renderSpecial();
    if (currentTab === "gathering") renderGathering();
    if (currentTab === "quest") renderQuests();
    if (currentTab === "crafting") renderCrafting();
    if (currentTab === "craftingPlus") renderCraftingPlus();
}

/* =========================================================
   MONSTERS (Clickable)
========================================================= */

function renderMonsters(filter="") {

    const enemies = new Set();

    DATA.EnemySpawn?.enemies?.forEach(e => {
        enemies.add(e[5]);
    });

    let html = "";

    enemies.forEach(id => {

        const name = getEnemyName(id);
        if (!name.toLowerCase().includes(filter)) return;

        html += `
            <div class="card">
                <h3 onclick="openMonster('${id}')" style="cursor:pointer">
                    ${name}
                </h3>
            </div>
        `;
    });

    document.getElementById("content").innerHTML = html;
}

function openMonster(enemyId) {

    let body = "";

    DATA.EnemySpawn.enemies.forEach(e => {

        if (String(e[5]) !== String(enemyId)) return;

        body += `
            <div>
                ${getStageName(e[0])}
                (Lv ${e[9]})
            </div>
        `;

        const table =
            DATA.EnemySpawn.dropsTables
                ?.find(t => t.id == e[27]);

        if (table) {
            table.items.forEach(i=>{
                body += `
                    <div>
                        ${getItemName(i[0])}
                        - ${Math.round(i[5]*100)}%
                    </div>
                `;
            });
        }
    });

    document.getElementById("content").innerHTML =
        card(getEnemyName(enemyId), body);
}

/* =========================================================
   ITEMS (Clickable)
========================================================= */

function renderItems(filter="") {

    let html = "";

    DATA.Items?.item?.forEach(i=>{
        if (!i.new.toLowerCase().includes(filter)) return;

        html += `
            <div class="card">
                <h3 onclick="openItem('${i.id}')" style="cursor:pointer">
                    ${i.new}
                </h3>
            </div>
        `;
    });

    document.getElementById("content").innerHTML = html;
}

function openItem(id) {

    let body = "<strong>Dropped By:</strong>";

    DATA.EnemySpawn?.enemies?.forEach(e=>{
        const table =
            DATA.EnemySpawn.dropsTables
                ?.find(t => t.id == e[27]);

        if (!table) return;

        table.items.forEach(i=>{
            if (String(i[0]) === String(id)) {
                body += `<div>${getEnemyName(e[5])}</div>`;
            }
        });
    });

    body += "<br><strong>Sold In Shops:</strong>";

    DATA.Shops?.forEach(shop=>{
        shop?.Data?.GoodsParamList?.forEach(g=>{
            if (String(g.ItemId) === String(id)) {
                getShopNames(shop.ShopId)
                    .forEach(n=> body+=`<div>${n}</div>`);
            }
        });
    });

    document.getElementById("content").innerHTML =
        card(getItemName(id), body);
}

/* =========================================================
   STAGES (Clean & Deduped)
========================================================= */

function renderStages(filter="") {

    let html="";

    Object.keys(DATA.StageNames || {}).forEach(id=>{

        const name = getStageName(id);
        if (!name.toLowerCase().includes(filter)) return;

        const monsters = new Set();

        DATA.EnemySpawn?.enemies?.forEach(e=>{
            if (String(e[0]) === String(id))
                monsters.add(e[5]);
        });

        let body="";
        monsters.forEach(m=>{
            body+=`<div>${getEnemyName(m)}</div>`;
        });

        html+=card(name, body);
    });

    document.getElementById("content").innerHTML = html;
}

/* =========================================================
   SHOPS
========================================================= */

function renderShops(){

    let html="";

    DATA.Shops?.forEach(shop=>{

        let body="";

        shop?.Data?.GoodsParamList?.forEach(i=>{
            body+=`<div>${getItemName(i.ItemId)}</div>`;
        });

        getShopNames(shop.ShopId).forEach(name=>{
            html+=card(name, body);
        });
    });

    document.getElementById("content").innerHTML=html;
}

/* =========================================================
   SPECIAL (Flat)
========================================================= */

function renderSpecial(){

    let html="";

    DATA.Special?.shops?.forEach(shop=>{

        shop.categories?.forEach(cat=>{

            let body="";

            cat.appraisals?.forEach(app=>{
                app.pool?.forEach(p=>{
                    body+=`<div>${p.name}</div>`;
                });
            });

            html+=card(cat.label, body);
        });
    });

    document.getElementById("content").innerHTML=html;
}

/* =========================================================
   GATHERING
========================================================= */

function renderGathering(){

    const map=new Map();

    DATA.Gathering?.forEach(r=>{
        const stage=r[0];
        const item=r[4];
        if(!map.has(stage)) map.set(stage,new Set());
        map.get(stage).add(item);
    });

    let html="";

    map.forEach((items,stage)=>{
        let body="";
        items.forEach(i=>{
            body+=`<div>${getItemName(i)}</div>`;
        });
        html+=card(getStageName(stage),body);
    });

    document.getElementById("content").innerHTML=html;
}

/* =========================================================
   QUESTS
========================================================= */

function renderQuests(){

    let html="";

    DATA.Quests?.forEach(q=>{
        html+=card(
            q.comment,
            `<div>Base Level: ${q.base_level}</div>`
        );
    });

    document.getElementById("content").innerHTML=html;
}

/* =========================================================
   CRAFTING
========================================================= */

function renderCrafting(){

    let html="";

    DATA.Crafting?.forEach(cat=>{
        cat.RecipeList?.forEach(r=>{
            html+=card(getItemName(r.ItemID),"");
        });
    });

    document.getElementById("content").innerHTML=html;
}

function renderCraftingPlus(){

    let html="";

    DATA.CraftingPlus?.forEach(cat=>{
        cat.RecipeList?.forEach(r=>{
            html+=card(
                getItemName(r.ItemID)
                +" → "+
                getItemName(r.GradeupItemID),
                ""
            );
        });
    });

    document.getElementById("content").innerHTML=html;
}
