/* =========================================================
   DDON WIKI V2 – COMPLETE FIXED BUILD
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
   QUEST LOADER
========================================================= */

async function loadQuests() {
    try {
        const res = await fetch("questwiki/index.json");
        const list = await res.json();
        DATA.Quests = [];

        for (const file of list) {
            const r = await fetch("questwiki/" + file);
            DATA.Quests.push(await r.json());
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
   ROUTING
========================================================= */

function navigate(url) {
    history.pushState({}, "", url);
    router();
}

window.addEventListener("popstate", router);

function router() {
    const p = new URLSearchParams(window.location.search);

    if (p.has("monster")) return openMonster(p.get("monster"));
    if (p.has("item")) return openItem(p.get("item"));
    if (p.has("stage")) return openStage(p.get("stage"));
    if (p.has("shop")) return openShop(p.get("shop"));
    if (p.has("quest")) return openQuest(p.get("quest"));

    renderHome();
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
        navigate("?");
    };
});

/* =========================================================
   HOME
========================================================= */

function renderHome() {

    const filter =
        document.getElementById("searchBox")
        ?.value?.toLowerCase() || "";

    if (currentTab === "monster") return renderMonsters(filter);
    if (currentTab === "item") return renderItems(filter);
    if (currentTab === "stage") return renderStages(filter);
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

    const ids = new Set();
    DATA.EnemySpawn?.enemies?.forEach(e => ids.add(e[5]));

    let html = "";

    ids.forEach(id => {
        const name = getEnemyName(id);
        if (!name || !name.toLowerCase().includes(filter)) return;

        html += `
            <div class="card">
                <h3 onclick="navigate('?monster=${id}')"
                    style="cursor:pointer">
                    ${name}
                </h3>
            </div>
        `;
    });

    document.getElementById("content").innerHTML = html;
}

function openMonster(id) {

    const stageMap = new Map();
    const dropIds = new Set();

    DATA.EnemySpawn?.enemies?.forEach(e => {
        if (String(e[5]) !== String(id)) return;

        if (!stageMap.has(e[0])) stageMap.set(e[0], []);
        stageMap.get(e[0]).push(e[9]);

        if (e[27]) dropIds.add(e[27]);
    });

    let body = "";

    stageMap.forEach((levels, stageId) => {

        levels.sort((a,b)=>a-b);
        const min = levels[0];
        const max = levels[levels.length-1];

        body += `
            <div onclick="navigate('?stage=${stageId}')"
                 style="cursor:pointer">
                ${getStageName(stageId)}
                (Lv ${min}${min!==max?"-"+max:""})
            </div>
        `;
    });

    if (dropIds.size > 0) {

        body += "<br><strong>Drops:</strong>";

        dropIds.forEach(dropId=>{
            const table =
                DATA.EnemySpawn?.dropsTables
                    ?.find(t => t.id == dropId);

            table?.items?.forEach(i=>{
                body += `
                    <div onclick="navigate('?item=${i[0]}')"
                         style="cursor:pointer">
                        ${getItemName(i[0])}
                        (${i[1]}-${i[2]})
                        - ${Math.round(i[5]*100)}%
                    </div>
                `;
            });
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
        if (!i?.new) return;
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

    DATA.EnemySpawn?.enemies?.forEach(e=>{
        const table =
            DATA.EnemySpawn?.dropsTables
                ?.find(t => t.id == e[27]);

        table?.items?.forEach(i=>{
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

    DATA.Shops?.forEach(shop=>{
        shop?.Data?.GoodsParamList?.forEach(g=>{
            if (String(g.ItemId) === String(id)) {
                getShopNames(shop.ShopId)
                    .forEach(name=>{
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

    body += "<br><strong>Exchanged At:</strong>";

    DATA.Special?.shops?.forEach(shop=>{
        shop.categories?.forEach(cat=>{
            cat.appraisals?.forEach(app=>{
                app.pool?.forEach(p=>{
                    if (String(p.item_id) === String(id)) {
                        body += `<div>${cat.label}</div>`;
                    }
                });
            });
        });
    });

    body += "<br><strong>Gathered At:</strong>";

    DATA.Gathering?.forEach(r=>{
        if (String(r[4]) === String(id)) {
            body += `<div>${getStageName(r[0])}</div>`;
        }
    });

    document.getElementById("content").innerHTML =
        card(getItemName(id), body);
}

/* =========================================================
   QUESTS FULL REWARDS
========================================================= */

function openQuest(id){

    const q = DATA.Quests?.find(x=>String(x.id)===String(id));
    if(!q) return;

    let body = `<div>Base Level: ${q.base_level}</div><br>`;

    if(q.rewards){
        body += "<strong>Rewards:</strong>";

        q.rewards.forEach(r=>{

            if(r.type==="select"){
                r.loot_pool?.forEach(i=>{
                    body+=`
                        <div>
                            ${i.comment || getItemName(i.item_id)}
                            x${i.num}
                        </div>`;
                });
            }

            if(r.type==="item"){
                body+=`
                    <div>
                        ${getItemName(r.item_id)}
                        x${r.num}
                    </div>`;
            }

            if(r.type==="wallet"){
                body+=`<div>${r.wallet_type}: ${r.amount}</div>`;
            }

            if(r.type==="exp"){
                body+=`<div>EXP: ${r.amount}</div>`;
            }
        });
    }

    document.getElementById("content").innerHTML =
        card(q.comment, body);
}
