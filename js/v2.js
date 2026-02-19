/* =========================================================
   DDON WIKI V2 – FULL CLEAN STABLE BUILD
========================================================= */

const DATA = {};
let currentTab = "monster";
let currentQuestCategory = "All";

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
            const json = await r.json();

            // 🔥 Dateiname als eindeutige ID speichern
            json._fileId = file.replace(".json","");

            DATA.Quests.push(json);
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
   SEARCH LISTENER
========================================================= */

document.getElementById("searchBox")
    ?.addEventListener("input", () => {
        renderHome();
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
    if (currentTab === "shop") return renderShops(filter);
    if (currentTab === "special") return renderSpecial(filter);
    if (currentTab === "gathering") return renderGathering(filter);
    if (currentTab === "quest") return renderQuests(filter);
    if (currentTab === "crafting") return renderCrafting(filter);
    if (currentTab === "craftingPlus") return renderCraftingPlus(filter);
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
    const droppedSet = new Set();

    DATA.EnemySpawn?.enemies?.forEach(e=>{
        const table =
            DATA.EnemySpawn?.dropsTables
                ?.find(t => t.id == e[27]);

        table?.items?.forEach(i=>{
            if (String(i[0]) === String(id)) {
                if (!droppedSet.has(e[5])) {
                    droppedSet.add(e[5]);
                    body += `
                        <div onclick="navigate('?monster=${e[5]}')"
                             style="cursor:pointer">
                            ${getEnemyName(e[5])}
                        </div>
                    `;
                }
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

const gatheredStages = new Set();

DATA.Gathering?.forEach(r=>{
    if (String(r[4]) === String(id)) {
        gatheredStages.add(r[0]);
    }
});

gatheredStages.forEach(stage=>{
    body += `
        <div onclick="navigate('?stage=${stage}')"
             style="cursor:pointer">
            ${getStageName(stage)}
        </div>`;
});
	
/* =======================
   CRAFTED FROM
======================= */

let craftedFound = false;

DATA.Crafting?.forEach(cat=>{
    cat.RecipeList?.forEach(r=>{
        if (String(r.ItemID) === String(id)) {

            if (!craftedFound) {
                body += "<br><strong>Crafted From:</strong>";
                craftedFound = true;
            }

            r.CraftMaterialList?.forEach(m=>{
                body += `
                    <div onclick="navigate('?item=${m.ItemId}')"
                         style="cursor:pointer">
                        ${getItemName(m.ItemId)} x${m.Num}
                    </div>`;
            });
        }
    });
});

/* =======================
   GRADE UP FROM
======================= */

let gradeFound = false;

DATA.CraftingPlus?.forEach(cat=>{
    cat.RecipeList?.forEach(r=>{
        if (String(r.GradeupItemID) === String(id)) {

            if (!gradeFound) {
                body += "<br><strong>Grade Up From:</strong>";
                gradeFound = true;
            }

            body += `
                <div onclick="navigate('?item=${r.ItemID}')"
                     style="cursor:pointer">
                    ${getItemName(r.ItemID)}
                </div>`;
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

    Object.keys(DATA.StageNames || {}).forEach(id=>{
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

    DATA.EnemySpawn?.enemies?.forEach(e=>{
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

function renderShops(filter=""){

    let html="";

    DATA.Shops?.forEach(shop=>{
        getShopNames(shop.ShopId).forEach(name=>{

            if (!name.toLowerCase().includes(filter)) return;

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
        DATA.Shops?.find(s=>String(s.ShopId)===String(id));

    if(!shop) return;

    let body="";

    shop.Data?.GoodsParamList?.forEach(i=>{
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

/* =========================================================
   SPECIAL
========================================================= */

function renderSpecial(filter=""){

    let html="";

    DATA.Special?.shops?.forEach(shop=>{
        shop.categories?.forEach(cat=>{

            if (!cat.label.toLowerCase().includes(filter)) return;

            let body="";
            cat.appraisals?.forEach(app=>{
                app.pool?.forEach(p=>{
                    body+=`
                        <div onclick="navigate('?item=${p.item_id}')"
                             style="cursor:pointer">
                            ${p.name}
                        </div>
                    `;
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

function renderGathering(filter=""){

    const map=new Map();

    DATA.Gathering?.forEach(r=>{
        const stage=r[0];
        const item=r[4];

        const itemName = (getItemName(item) || "").toLowerCase();
        const stageName = (getStageName(stage) || "").toLowerCase();

        if (
            filter &&
            !itemName.includes(filter) &&
            !stageName.includes(filter)
        ) return;

        if(!map.has(stage)) map.set(stage,new Set());
        map.get(stage).add(item);
    });

    let html="";

    map.forEach((items,stage)=>{
        let body="";
        items.forEach(i=>{
            body+=`
                <div onclick="navigate('?item=${i}')"
                     style="cursor:pointer">
                    ${getItemName(i)}
                </div>`;
        });
        html+=card(getStageName(stage),body);
    });

    document.getElementById("content").innerHTML=html;
}

/* =========================================================
   QUESTS
========================================================= */

function renderQuests(filter=""){

    let html="";

    DATA.Quests?.forEach(q=>{

        // 🔎 Search Filter
        if (!q.comment?.toLowerCase().includes(filter)) return;

        // 🏷 Category Filter
        if (
            currentQuestCategory !== "All" &&
            q.type !== currentQuestCategory
        ) return;

        html+=`
            <div class="card">
                <h3 onclick="navigate('?quest=${q._fileId}')"
                    style="cursor:pointer">
                    ${q.comment}
                </h3>
                <div style="font-size:12px;opacity:.6">
                    ${q.type || "Unknown"}
                </div>
            </div>
        `;
    });

    document.getElementById("content").innerHTML=html;
}

function openQuest(id){

    const q = DATA.Quests?.find(x => x._fileId === id);
    if(!q) return;

    let body = `
        <div style="font-size:12px;opacity:.6">
            ${q.type || "Unknown"}
        </div>
        <div>Base Level: ${q.base_level}</div>
        <br>
    `;

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

/* =========================================================
   CRAFTING
========================================================= */

function renderCrafting(filter=""){

    let html="";

    DATA.Crafting?.forEach(cat=>{
        cat.RecipeList?.forEach(r=>{

		const name = getItemName(r.ItemID) || "";
		if (!name.toLowerCase().includes(filter)) return;


            let mats="";
            r.CraftMaterialList?.forEach(m=>{
                mats+=`
                    <div onclick="navigate('?item=${m.ItemId}')"
                         style="cursor:pointer">
                        ${getItemName(m.ItemId)} x${m.Num}
                    </div>`;
            });

            html+=card(name,mats);
        });
    });

    document.getElementById("content").innerHTML=html;
}

function renderCraftingPlus(filter=""){

    let html="";

    DATA.CraftingPlus?.forEach(cat=>{
        cat.RecipeList?.forEach(r=>{

            const name = (getItemName(r.ItemID) || "");
            if (!name.toLowerCase().includes(filter)) return;

            let mats="";
            r.CraftMaterialList?.forEach(m=>{
                mats+=`
                    <div onclick="navigate('?item=${m.ItemId}')"
                         style="cursor:pointer">
                        ${getItemName(m.ItemId)} x${m.Num}
                    </div>`;
            });

            html+=card(
                name + " → " + getItemName(r.GradeupItemID),
                mats
            );
        });
    });

    document.getElementById("content").innerHTML=html;
}