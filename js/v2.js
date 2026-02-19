/* =========================================================
   DDON WIKI V2 – FINAL STABLE BUILD
   Single File Architecture
========================================================= */

const DATA = {};
let currentTab = "monster";

/* =========================================================
   LOAD ALL DATA
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

function card(title, contentHTML, id="") {
    return `
        <div class="card">
            <h2 onclick="toggle('${id}')" style="cursor:pointer;">
                ${title}
            </h2>
            <div id="${id}" style="display:none;">
                ${contentHTML}
            </div>
        </div>
    `;
}

function toggle(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = el.style.display === "none" ? "block" : "none";
}

/* =========================================================
   TAB SYSTEM
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
   HOME RENDER
========================================================= */

function renderHome() {

    const filter = document
        .getElementById("searchBox")
        .value.toLowerCase();

    if (currentTab === "monster") renderMonsters(filter);
    if (currentTab === "item") renderItems(filter);
    if (currentTab === "stage") renderStages(filter);
    if (currentTab === "shop") renderShops();
    if (currentTab === "special") renderSpecial();
    if (currentTab === "gathering") renderGathering();
    if (currentTab === "crafting") renderCrafting();
    if (currentTab === "craftingPlus") renderCraftingPlus();
    if (currentTab === "quest") renderQuestList();
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

        let content = "";

        data.stages.forEach((levels, stageId) => {

            levels.sort((a,b)=>a-b);
            const min = levels[0];
            const max = levels[levels.length-1];

            content += `
                <div>
                    ${getStageName(stageId)} 
                    (Lv ${min}${min!==max?"-"+max:""})
                </div>
            `;
        });

        content += "<h3>Drops</h3>";

        const table = DATA.EnemySpawn.dropsTables
            .find(t => t.id == data.drop);

        if (table) {
            table.items.forEach(i=>{
                const chance = Math.round(i[5] * 100);
                content += `
                    <div>
                        ${getItemName(i[0])} 
                        (${i[1]}-${i[2]}) 
                        - ${chance}%
                    </div>
                `;
            });
        }

        html += card(name, content, "m"+enemyId);
    });

    document.getElementById("content").innerHTML = html;
}

/* =========================================================
   STAGES (Stage → Monsters)
========================================================= */

function renderStages(filter="") {

    const map = new Map();

    DATA.EnemySpawn.enemies.forEach(e=>{
        const stage=e[0];
        const enemy=e[5];
        const level=e[9];

        if(!map.has(stage))
            map.set(stage,new Map());

        if(!map.get(stage).has(enemy))
            map.get(stage).set(enemy,[]);

        map.get(stage).get(enemy).push(level);
    });

    let html="";

    map.forEach((enemies,stageId)=>{

        const name=getStageName(stageId);
        if(!name.toLowerCase().includes(filter)) return;

        let content="";

        enemies.forEach((levels,enemyId)=>{
            levels.sort((a,b)=>a-b);
            const min=levels[0];
            const max=levels[levels.length-1];

            content+=`
                <div>
                    ${getEnemyName(enemyId)} 
                    (Lv ${min}${min!==max?"-"+max:""})
                </div>
            `;
        });

        html+=card(name,content,"s"+stageId);
    });

    document.getElementById("content").innerHTML=html;
}

/* =========================================================
   GATHERING (Grouped)
========================================================= */

function renderGathering(){

    const map=new Map();

    DATA.Gathering.forEach(r=>{
        const stage=r[0];
        const item=r[4];

        if(!map.has(stage))
            map.set(stage,new Set());

        map.get(stage).add(item);
    });

    let html="";

    map.forEach((items,stageId)=>{

        let content="";
        items.forEach(i=>{
            content+=`<div>${getItemName(i)}</div>`;
        });

        html+=card(getStageName(stageId),content,"g"+stageId);
    });

    document.getElementById("content").innerHTML=html;
}

/* =========================================================
   SPECIAL (No Trinket Wrapper)
========================================================= */

function renderSpecial(){

    let html="";

    DATA.Special.shops.forEach(shop=>{

        shop.categories.forEach(cat=>{

            let content="";

            cat.appraisals.forEach(a=>{
                a.pool.forEach(p=>{
                    content+=`<div>${p.name}</div>`;
                });
            });

            html+=card(cat.label,content,"sp"+cat.label);
        });
    });

    document.getElementById("content").innerHTML=html;
}

/* =========================================================
   SHOPS
========================================================= */

function renderShops(){

    let html="";

    DATA.Shops.forEach(shop=>{

        let content="";

        shop.Data.GoodsParamList.forEach(i=>{
            content+=`<div>${getItemName(i.ItemId)}</div>`;
        });

        html+=card("Shop "+shop.ShopId,content,"shop"+shop.ShopId);
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

            html+=card(getItemName(r.ItemID),mats,"c"+r.ItemID);
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

            html+=card(
                getItemName(r.ItemID)+" → "+getItemName(r.GradeupItemID),
                mats,
                "cp"+r.RecipeID
            );
        });
    });

    document.getElementById("content").innerHTML=html;
}

/* =========================================================
   QUESTS (AUTO LOAD ALL qX.json)
========================================================= */

async function renderQuestList(){

    const content=document.getElementById("content");
    content.innerHTML="Loading Quests...";

    const quests=[];

    for(let i=1;i<1000;i++){
        try{
            const res=await fetch(`datas/quests/q${i}.json`);
            if(!res.ok) continue;
            const data=await res.json();
            quests.push(data);
        }catch(e){}
    }

    let html="";

    quests.forEach(q=>{

        let rewards="";

        q.rewards.forEach(r=>{

            if(r.type==="select"){
                r.loot_pool.forEach(item=>{
                    rewards+=`<div>${item.comment} x${item.num}</div>`;
                });
            }

            if(r.type==="wallet"){
                rewards+=`<div>${r.wallet_type}: ${r.amount}</div>`;
            }

            if(r.type==="exp"){
                rewards+=`<div>EXP: ${r.amount}</div>`;
            }
        });

        html+=card(q.comment,rewards,"q"+q.quest_id);
    });

    content.innerHTML=html;
}
