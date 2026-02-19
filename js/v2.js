/* =========================================================
   DDON WIKI V2 – COMPLETE STABLE FINAL
   Query Routing + Fully Clickable
========================================================= */

const DATA = {};
let currentTab = "monster";

/* =========================================================
   LOAD ALL DATA
========================================================= */

async function loadJSON(name, path) {
    try {
        const res = await fetch(path);
        DATA[name] = await res.json();
    } catch {
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

    router();
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
            const r = await fetch("questwiki/" + file);
            const q = await r.json();
            DATA.Quests.push(q);
        }
    } catch {
        DATA.Quests = [];
    }
}

/* =========================================================
   HELPERS
========================================================= */

function getItemName(id) {
    const found = DATA.Items?.item?.find(i => String(i.id) === String(id));
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
   QUERY ROUTING
========================================================= */

function navigate(url) {
    history.pushState({}, "", url);
    router();
}

window.addEventListener("popstate", router);

function router() {

    const params = new URLSearchParams(window.location.search);

    if (params.has("monster")) return openMonster(params.get("monster"));
    if (params.has("item")) return openItem(params.get("item"));
    if (params.has("stage")) return openStage(params.get("stage"));
    if (params.has("shop")) return openShop(params.get("shop"));
    if (params.has("quest")) return openQuest(params.get("quest"));

    renderHome();
}

/* =========================================================
   TAB SWITCHING
========================================================= */

document.querySelectorAll(".tabs button").forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll(".tabs button")
            .forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentTab = btn.dataset.tab;
        navigate("?");
    };
});

document.getElementById("searchBox")
    .addEventListener("input", renderHome);

/* =========================================================
   HOME RENDER
========================================================= */

function renderHome() {

    const value =
        document.getElementById("searchBox").value.toLowerCase();

    if (currentTab === "monster") return renderMonsters(value);
    if (currentTab === "item") return renderItems(value);
    if (currentTab === "stage") return renderStages(value);
    if (currentTab === "shop") return renderShops();
    if (currentTab === "special") return renderSpecial();
    if (currentTab === "gathering") return renderGathering();
    if (currentTab === "quest") return renderQuests();
    if (currentTab === "crafting") return renderCrafting();
    if (currentTab === "craftingPlus") return renderCraftingPlus();
}

/* =========================================================
   MONSTERS
========================================================= */

function renderMonsters(filter="") {

    const map = new Map();

    DATA.EnemySpawn?.enemies?.forEach(e => {
        const stage = e[0];
        const enemy = e[5];
        const level = e[9];

        if (!map.has(enemy)) map.set(enemy, new Map());
        if (!map.get(enemy).has(stage)) map.get(enemy).set(stage, []);
        map.get(enemy).get(stage).push(level);
    });

    let html = "";

    map.forEach((stages, enemyId) => {

        const name = getEnemyName(enemyId);
        if (!name.toLowerCase().includes(filter)) return;

        html += `
            <div class="card">
                <h3 onclick="navigate('?monster=${enemyId}')"
                    style="cursor:pointer">
                    ${name}
                </h3>
            </div>
        `;
    });

    document.getElementById("content").innerHTML = html;
}

function openMonster(id) {

    const stages = new Map();
    let dropTable = null;

    DATA.EnemySpawn.enemies.forEach(e => {
        if (String(e[5]) !== String(id)) return;

        if (!stages.has(e[0])) stages.set(e[0], []);
        stages.get(e[0]).push(e[9]);

        dropTable = e[27];
    });

    let body = "";

    stages.forEach((levels, stageId) => {

        levels.sort((a,b)=>a-b);
        const min = levels[0];
        const max = levels[levels.length-1];

        body += `
            <div>
                ${getStageName(stageId)}
                (Lv ${min}${min!==max?"-"+max:""})
            </div>
        `;
    });

    const table =
        DATA.EnemySpawn.dropsTables
            ?.find(t => t.id == dropTable);

    if (table) {

        body += "<br><strong>Drops:</strong>";

        table.items.forEach(i=>{
            body += `
                <div onclick="navigate('?item=${i[0]}')"
                     style="cursor:pointer">
                    ${getItemName(i[0])}
                    (${i[1]}-${i[2]})
                    - ${Math.round(i[5]*100)}%
                </div>
            `;
        });
    }

    document.getElementById("content").innerHTML =
        card(getEnemyName(id), body);
}

/* =========================================================
   ITEMS
========================================================= */

function renderItems(filter="") {

    let html = "";

    DATA.Items?.item?.forEach(i=>{
        if (!i.new.toLowerCase().includes(filter)) return;

        html += `
            <div class="card">
                <h3 onclick="navigate('?item=${i.id}')"
                    style="cursor:pointer">
                    ${i.new}
                </h3>
            </div>
        `;
    });

    document.getElementById("content").innerHTML = html;
}

function openItem(id) {

    let body = "<strong>Dropped By:</strong>";

    DATA.EnemySpawn.enemies.forEach(e=>{
        const table =
            DATA.EnemySpawn.dropsTables
                ?.find(t => t.id == e[27]);

        if (!table) return;

        table.items.forEach(i=>{
            if (String(i[0]) === String(id)) {
                body += `
                    <div onclick="navigate('?monster=${e[5]}')"
                         style="cursor:pointer">
                        ${getEnemyName(e[5])}
                    </div>
                `;
            }
        });
    });

    body += "<br><strong>Sold In Shops:</strong>";

    DATA.Shops.forEach(shop=>{
        shop.Data.GoodsParamList.forEach(g=>{
            if (String(g.ItemId) === String(id)) {
                getShopNames(shop.ShopId).forEach(name=>{
                    body += `
                        <div onclick="navigate('?shop=${shop.ShopId}')"
                             style="cursor:pointer">
                            ${name} - ${g.Price} Gold
                        </div>
                    `;
                });
            }
        });
    });

    document.getElementById("content").innerHTML =
        card(getItemName(id), body);
}

/* =========================================================
   STAGES
========================================================= */

function renderStages(filter="") {

    let html="";

    Object.keys(DATA.StageNames).forEach(id=>{

        const name = getStageName(id);
        if (!name.toLowerCase().includes(filter)) return;

        html += `
            <div class="card">
                <h3 onclick="navigate('?stage=${id}')"
                    style="cursor:pointer">
                    ${name}
                </h3>
            </div>
        `;
    });

    document.getElementById("content").innerHTML = html;
}

function openStage(id) {

    const map = new Map();

    DATA.EnemySpawn.enemies.forEach(e=>{
        if (String(e[0]) !== String(id)) return;

        if (!map.has(e[5])) map.set(e[5], []);
        map.get(e[5]).push(e[9]);
    });

    let body="";

    map.forEach((levels, enemyId)=>{

        levels.sort((a,b)=>a-b);
        const min = levels[0];
        const max = levels[levels.length-1];

        body += `
            <div onclick="navigate('?monster=${enemyId}')"
                 style="cursor:pointer">
                ${getEnemyName(enemyId)}
                (Lv ${min}${min!==max?"-"+max:""})
            </div>
        `;
    });

    document.getElementById("content").innerHTML =
        card(getStageName(id), body);
}

/* =========================================================
   SHOPS
========================================================= */

function renderShops(){

    let html="";

    DATA.Shops.forEach(shop=>{
        getShopNames(shop.ShopId).forEach(name=>{
            html += `
                <div class="card">
                    <h3 onclick="navigate('?shop=${shop.ShopId}')"
                        style="cursor:pointer">
                        ${name}
                    </h3>
                </div>
            `;
        });
    });

    document.getElementById("content").innerHTML=html;
}

function openShop(id){

    const shop =
        DATA.Shops.find(s=>String(s.ShopId)===String(id));

    let body="";

    shop.Data.GoodsParamList.forEach(i=>{
        body += `
            <div onclick="navigate('?item=${i.ItemId}')"
                 style="cursor:pointer">
                ${getItemName(i.ItemId)}
                - ${i.Price} Gold
            </div>
        `;
    });

    document.getElementById("content").innerHTML =
        card(getShopNames(id)[0], body);
}
