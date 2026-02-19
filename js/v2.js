/* =========================================================
   DDON WIKI V2 – GITHUB FINAL READY
========================================================= */

const GITHUB_USER = "DDON-Revival";
const GITHUB_REPO = "DDON.github.io";

const DATA = {};
let currentTab = "monster";

/* =========================================================
   LOAD CORE DATA (LOCAL DATAS FOLDER)
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

    await loadQuests();   // ← HIER rein

    renderHome();
}

loadAll();

/* =========================================================
   GITHUB QUEST AUTO LOAD
========================================================= */

async function loadQuests() {

    const res = await fetch("questwiki/index.json");
    const list = await res.json();

    DATA.Quests = [];

    for (const file of list) {
        try {
            const r = await fetch("questwiki/" + file);
            const q = await r.json();
            DATA.Quests.push(q);
        } catch(e) {
            console.log("Quest failed:", file);
        }
    }

    console.log("Loaded quests:", DATA.Quests.length);
}

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

function card(title, html) {
    return `
        <div class="card">
            <h3>${title}</h3>
            ${html}
        </div>
    `;
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
        renderHome();
    };
});

document.getElementById("searchBox").addEventListener("input", renderHome);

/* =========================================================
   HOME
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
   MONSTERS (Stage + Level + DropRate FIXED)
========================================================= */

function renderMonsters(filter="") {

    const map = new Map();

    DATA.EnemySpawn.enemies.forEach(e => {

        const stage = e[0];
        const enemy = e[5];
        const level = e[9];
        const drop  = e[27];

        if (!map.has(enemy))
            map.set(enemy, { stages:new Map(), drop });

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

            stageHTML += `
                <div>
                    ${getStageName(stageId)}
                    (Lv ${min}${min!==max?"-"+max:""})
                </div>
            `;
        });

        const table =
            DATA.EnemySpawn.dropsTables
                .find(t => t.id == data.drop);

        if (table) {

            stageHTML += "<br><strong>Drops:</strong>";

            table.items.forEach(i=>{

                const chance = Math.round(i[5]*100);

                stageHTML += `
                    <div>
                        ${getItemName(i[0])}
                        (${i[1]}-${i[2]})
                        - ${chance}%
                    </div>
                `;
            });
        }

        html += card(name, stageHTML);
    });

    document.getElementById("content").innerHTML = html;
}

/* =========================================================
   ITEMS + DETAIL PAGE
========================================================= */

function renderItems(filter="") {

    let html = "";

    DATA.Items.item.forEach(i=>{
        if (!i.new.toLowerCase().includes(filter)) return;

        html += `
            <div class="card">
                <h3 onclick="openItem(${i.id})"
                    style="cursor:pointer">
                    ${i.new}
                </h3>
            </div>
        `;
    });

    document.getElementById("content").innerHTML = html;
}

function openItem(id) {

    let html = `<strong>Dropped By:</strong>`;

    DATA.EnemySpawn.enemies.forEach(e=>{
        if (e[27]) {

            const table =
                DATA.EnemySpawn.dropsTables
                    .find(t => t.id == e[27]);

            if (!table) return;

            table.items.forEach(i=>{
                if (String(i[0]) === String(id)) {
                    html += `<div>${getEnemyName(e[5])}</div>`;
                }
            });
        }
    });

    document.getElementById("content").innerHTML =
        card(getItemName(id), html);
}

/* =========================================================
   STAGES (Monster inside + Level)
========================================================= */

function renderStages(filter="") {

    let html="";

    Object.keys(DATA.StageNames).forEach(id=>{

        const name = getStageName(id);
        if (!name.toLowerCase().includes(filter)) return;

        let monsters="";

        DATA.EnemySpawn.enemies.forEach(e=>{
            if (String(e[0])===String(id)) {
                monsters += `<div>${getEnemyName(e[5])} (Lv ${e[9]})</div>`;
            }
        });

        html += card(name, monsters);
    });

    document.getElementById("content").innerHTML = html;
}

/* =========================================================
   QUESTS (AUTO FROM GITHUB FOLDER)
========================================================= */

function renderQuests(){

    let html="";

    DATA.Quests.forEach(q=>{

        html += card(q.comment,
            `Base Level: ${q.base_level}`);
    });

    document.getElementById("content").innerHTML=html;
}

/* =========================================================
   OTHER TABS (UNCHANGED CORE)
========================================================= */

function renderShops(){
    let html="";
    DATA.Shops.forEach(s=>{
        html+=card("Shop "+s.ShopId,"");
    });
    document.getElementById("content").innerHTML=html;
}

function renderSpecial(){
    let html="";
    DATA.Special.shops.forEach(s=>{
        html+=card(s.shop_type,"");
    });
    document.getElementById("content").innerHTML=html;
}

function renderGathering(){
    let html="";
    DATA.Gathering.forEach(r=>{
        html+=`<div>${getStageName(r[0])}
               → ${getItemName(r[4])}</div>`;
    });
    document.getElementById("content").innerHTML=card("Gathering",html);
}

function renderCrafting(){
    let html="";
    DATA.Crafting.forEach(cat=>{
        cat.RecipeList.forEach(r=>{
            html+=card(getItemName(r.ItemID),"");
        });
    });
    document.getElementById("content").innerHTML=html;
}

function renderCraftingPlus(){
    let html="";
    DATA.CraftingPlus.forEach(cat=>{
        cat.RecipeList.forEach(r=>{
            html+=card(getItemName(r.ItemID)
                +" → "+
                getItemName(r.GradeupItemID),"");
        });
    });
    document.getElementById("content").innerHTML=html;
}
