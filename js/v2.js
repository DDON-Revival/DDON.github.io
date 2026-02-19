/* =========================================================
   DDON WIKI V2 FINAL
   Single File Architecture
========================================================= */

const DATA = {};
let currentTab = "monster";

/* =========================================================
   LOAD ALL DATA (LOCAL DATAS FOLDER)
========================================================= */

async function loadJSON(name, path) {
    const res = await fetch(path);
    DATA[name] = await res.json();
}

async function loadCSV(name, path) {
    const res = await fetch(path);
    const text = await res.text();
    DATA[name] = text.split("\n").slice(1).map(r => r.split(","));
}

async function loadAll() {

    await loadJSON("EnemySpawn", "datas/EnemySpawn.json");
    await loadJSON("EnemyNames", "datas/enemy-names.json");
    await loadJSON("StageNames", "datas/stage-names.json");
    await loadJSON("Items", "datas/item_names.json");
    await loadJSON("Shops", "datas/Shop.json");
    await loadJSON("Special", "datas/SpecialShops.json");
    await loadJSON("Crafting", "datas/CraftingRecipes.json");
    await loadJSON("CraftingPlus", "datas/CraftingRecipesGradeUp.json");

    await loadCSV("Gathering", "datas/GatheringItem.csv");

    renderHome();
}

loadAll();

/* =========================================================
   HELPERS
========================================================= */

function getItemName(id) {
    const found = DATA.Items.item.find(i => String(i.id) === String(id));
    return found ? found.new : "Item " + id;
}

function getEnemyName(id) {
    return DATA.EnemyNames[id] || id;
}

function getStageName(id) {
    return DATA.StageNames[id]?.en || id;
}

function card(title, contentHTML) {
    return `
        <div class="card">
            <h2>${title}</h2>
            ${contentHTML}
        </div>
    `;
}

function link(text, fn) {
    return `<a class="link" onclick="${fn}">${text}</a>`;
}

/* =========================================================
   TAB + SEARCH
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

document.getElementById("searchBox").addEventListener("input", renderHome);

/* =========================================================
   HOME RENDER
========================================================= */

function renderHome() {
    const value = document.getElementById("searchBox").value.toLowerCase();
    const content = document.getElementById("content");

    if (currentTab === "monster") renderMonsters(value);
    if (currentTab === "item") renderItems(value);
    if (currentTab === "stage") renderStages(value);
    if (currentTab === "shop") renderShops(value);
    if (currentTab === "special") renderSpecial(value);
    if (currentTab === "gathering") renderGathering();
    if (currentTab === "crafting") renderCrafting();
    if (currentTab === "craftingPlus") renderCraftingPlus();
}

/* =========================================================
   MONSTERS
========================================================= */

function renderMonsters(filter="") {

    const map = new Map();
    DATA.EnemySpawn.enemies.forEach(e => {
        const stage = e[0];
        const enemy = e[5];
        const level = e[9];
        const drop = e[27];

        if (!map.has(enemy)) {
            map.set(enemy, { stages:new Map(), drop });
        }

        if (!map.get(enemy).stages.has(stage))
            map.get(enemy).stages.set(stage, []);

        map.get(enemy).stages.get(stage).push(level);
    });

    let html = "";

    map.forEach((data, enemyId) => {

        const name = getEnemyName(enemyId);
        if (!name.toLowerCase().includes(filter)) return;

        let stageHTML = "";

        data.stages.forEach((levels, stageId) => {
            levels.sort((a,b)=>a-b);
            const min = levels[0];
            const max = levels[levels.length-1];
            stageHTML += `<div>${getStageName(stageId)} (Lv ${min}${min!==max?"-"+max:""})</div>`;
        });

        stageHTML += "<h3>Drops</h3>";

        const table = DATA.EnemySpawn.dropsTables
            .find(t => t.id == data.drop);

        if (table) {
            table.items.forEach(i=>{
                stageHTML += `<div>${getItemName(i[0])}</div>`;
            });
        }

        html += card(name, stageHTML);
    });

    document.getElementById("content").innerHTML = html;
}

/* =========================================================
   ITEMS
========================================================= */

function renderItems(filter="") {

    let html = "";

    DATA.Items.item.forEach(i=>{
        if (!i.new.toLowerCase().includes(filter)) return;
        html += card(i.new, "");
    });

    document.getElementById("content").innerHTML = html;
}

/* =========================================================
   STAGES
========================================================= */

function renderStages(filter="") {

    let html = "";

    Object.keys(DATA.StageNames).forEach(id=>{
        const name = getStageName(id);
        if (!name.toLowerCase().includes(filter)) return;

        html += card(name,"");
    });

    document.getElementById("content").innerHTML = html;
}

/* =========================================================
   GATHERING (GROUPED)
========================================================= */

function renderGathering() {

    const map = new Map();

    DATA.Gathering.forEach(r=>{
        const stage = r[0];
        const item = r[4];

        if (!map.has(stage)) map.set(stage,new Set());
        map.get(stage).add(item);
    });

    let html = "";

    map.forEach((items,stageId)=>{
        let itemHTML="";
        items.forEach(i=>{
            itemHTML += `<div>${getItemName(i)}</div>`;
        });

        html += card(getStageName(stageId), itemHTML);
    });

    document.getElementById("content").innerHTML = html;
}

/* =========================================================
   SHOPS
========================================================= */

function renderShops() {

    let html="";

    DATA.Shops.forEach(shop=>{
        let items="";
        shop.Data.GoodsParamList.forEach(i=>{
            items += `<div>${getItemName(i.ItemId)}</div>`;
        });
        html+=card("Shop "+shop.ShopId, items);
    });

    document.getElementById("content").innerHTML=html;
}

/* =========================================================
   SPECIAL
========================================================= */

function renderSpecial(){

    let html="";

    DATA.Special.shops.forEach(shop=>{
        let items="";
        shop.categories.forEach(c=>{
            c.appraisals.forEach(a=>{
                a.pool.forEach(p=>{
                    items+=`<div>${p.name}</div>`;
                });
            });
        });
        html+=card(shop.shop_type,items);
    });

    document.getElementById("content").innerHTML=html;
}

/* =========================================================
   CRAFTING
========================================================= */

function renderCrafting(){

    let html="";

    DATA.Crafting.forEach(cat=>{
        cat.RecipeList.forEach(r=>{
            let mats="";
            r.CraftMaterialList.forEach(m=>{
                mats+=`<div>${getItemName(m.ItemId)} x${m.Num}</div>`;
            });
            html+=card(getItemName(r.ItemID),mats);
        });
    });

    document.getElementById("content").innerHTML=html;
}

/* =========================================================
   CRAFTING PLUS
========================================================= */

function renderCraftingPlus(){

    let html="";

    DATA.CraftingPlus.forEach(cat=>{
        cat.RecipeList.forEach(r=>{
            let mats="";
            r.CraftMaterialList.forEach(m=>{
                mats+=`<div>${getItemName(m.ItemId)} x${m.Num}</div>`;
            });
            html+=card(getItemName(r.ItemID)+" → "+getItemName(r.GradeupItemID),mats);
        });
    });

    document.getElementById("content").innerHTML=html;
}
