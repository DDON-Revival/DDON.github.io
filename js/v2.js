/* =========================================================
   DDON WIKI V2 – FULL CLEAN STABLE BUILD
========================================================= */

const DATA = {};

const SPAWN_CHANNELS = [
    { label: "Normal Channel", key: "EnemySpawnNormal" },
    { label: "Boss Rush Channel", key: "EnemySpawnBR" },
    { label: "Collab Channel", key: "EnemySpawnCollab" },
    { label: "Custom Channel", key: "EnemySpawnCustom" }
];

const GATHERING_CHANNELS = [
    { label: "Normal Channel", key: "GatheringNormal" },
    { label: "Boss Rush Channel", key: "GatheringBR" },
    { label: "Collab Channel", key: "GatheringCollab" },
    { label: "Custom Channel", key: "GatheringCustom" }
];

const SHOP_CHANNELS = [
    { label: "Normal Channel", key: "ShopsNormal" },
    { label: "Boss Rush Channel", key: "ShopsBR" },
    { label: "Collab Channel", key: "ShopsCollab" },
    { label: "Custom Channel", key: "ShopsCustom" }
];

let currentTab = "monster";
let currentQuestCategory = "All";
let currentLanguage = "en"; // en oder jp
let currentChannelFilter = "all";

const UI = {
    en: {
        tabs: {
            monster: "Monsters",
            item: "Items",
            stage: "Stages",
            shop: "Shops",
            special: "Special",
            gathering: "Gathering",
            quest: "Quests",
            crafting: "Crafting",
            craftingPlus: "Crafting+"
        },
        search: "Search...",
        droppedBy: "Dropped By",
        soldIn: "Sold In Shops",
        exchangedAt: "Exchanged At",
        gatheredAt: "Gathered At",
        craftedFrom: "Crafted From",
        gradeUpFrom: "Grade Up From",
        rewards: "Rewards",
        baseLevel: "Base Level",
        unknown: "Unknown",
        exp: "EXP"
    },

    jp: {
        tabs: {
            monster: "モンスター",
            item: "アイテム",
            stage: "ステージ",
            shop: "ショップ",
            special: "特別交換",
            gathering: "採集",
            quest: "クエスト",
            crafting: "クラフト",
            craftingPlus: "強化"
        },
        search: "検索...",
        droppedBy: "ドロップ元",
        soldIn: "販売ショップ",
        exchangedAt: "交換場所",
        gatheredAt: "採集場所",
        craftedFrom: "素材",
        gradeUpFrom: "強化元",
        rewards: "報酬",
        baseLevel: "基本レベル",
        unknown: "不明",
        exp: "経験値"
    }
};

function updateUI() {

    const t = UI[currentLanguage];

    // Tabs
    document.querySelectorAll(".tabs button").forEach(btn => {
        const key = btn.dataset.tab;
        if (t.tabs[key])
            btn.textContent = t.tabs[key];
    });

    // Search Placeholder
    const search = document.getElementById("searchBox");
    if (search)
        search.placeholder = t.search;
}

const WALLET_TYPES = {
    0:  { en:"None", jp:"なし", color:"#888888" },

    1:  { en:"Gold", jp:"ゴールド", color:"#FFD700" },             // Gelb
    2:  { en:"Rift Points", jp:"リム", color:"#0A1E6A" },         // Dunkelblau
    3:  { en:"Blood Orbs", jp:"ブラッドオーブ", color:"#8B0000" }, // Dunkelrot
    4:  { en:"Silver Tickets", jp:"シルバーチケット", color:"#C0C0C0" }, // Silber
    5:  { en:"Golden Gemstones", jp:"ゴールドジェムストーン", color:"#D4AF37" }, // Gold

    6:  { en:"Rental Points", jp:"レンタルポイント", color:"#87CEFA" }, // Hellblau
    7:  { en:"Reset Job Points", jp:"ジョブポイント初期化", color:"#FFFFFF" }, 
    8:  { en:"Reset Craft Skills", jp:"クラフトスキル初期化", color:"#FFFFFF" },
    9:  { en:"High Orbs", jp:"ハイオーブ", color:"#800080" }, // Lila

    10: { en:"Dominion Points", jp:"ドミニオンポイント", color:"#FFFFFF" },
    11: { en:"Adventure Pass Points", jp:"アドベンチャーパスポイント", color:"#FFFFFF" },
    12: { en:"Custom Made Service Tickets", jp:"カスタムメイド券", color:"#FFFFFF" },
    13: { en:"Bitterblack Maze Reset Tickets", jp:"黒呪の迷宮リセット券", color:"#FFFFFF" },

    14: { en:"Golden Dragon Marks", jp:"金竜印", color:"#B87333" }, // Goldrot
    15: { en:"Silver Dragon Marks", jp:"銀竜印", color:"#A0522D" }, // Silberrot
    16: { en:"Red Dragon Marks", jp:"赤竜印", color:"#FF0000" }     // Rot
};

function getWalletDisplay(walletType) {

    const wallet = WALLET_TYPES[walletType] || WALLET_TYPES[1];

    return `
        <span style="
            color:${wallet.color};
            font-weight:600;
            text-shadow:0 0 6px ${wallet.color}55;
        ">
            ${wallet[currentLanguage]}
        </span>
    `;
}

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

    await loadJSON("EnemySpawnNormal", "datas/EnemySpawn.json");
    await loadJSON("EnemySpawnBR", "datas/EnemySpawnBR.json");
    await loadJSON("EnemySpawnCollab", "datas/EnemySpawnCollab.json");
    await loadJSON("EnemySpawnCustom", "datas/EnemySpawnCustom.json");
    await loadJSON("EnemyNames", "datas/enemy-names.json");
    await loadJSON("StageNames", "datas/stage-names.json");
    await loadJSON("Items", "datas/item_names.json");
    await loadJSON("ShopsNormal", "datas/Shop.json");
	await loadJSON("ShopsBR", "datas/ShopBR.json");
	await loadJSON("ShopsCollab", "datas/ShopCollab.json");
	await loadJSON("ShopsCustom", "datas/ShopCustom.json");
    await loadCSV("NpcNamesRaw", "datas/npc_names.csv");
    await loadJSON("ShopFunctions", "datas/shops_function.json");
    await loadJSON("Special", "datas/SpecialShops.json");
    await loadJSON("Crafting", "datas/CraftingRecipes.json");
    await loadJSON("CraftingPlus", "datas/CraftingRecipesGradeUp.json");
    await loadCSV("GatheringNormal", "datas/GatheringItem.csv");
    await loadCSV("GatheringBR", "datas/GatheringItemBR.csv");
    await loadCSV("GatheringCollab", "datas/GatheringItemCollab.csv");
    await loadCSV("GatheringCustom", "datas/GatheringItemCustom.csv");

    await loadQuests();

    buildItemMap();
    buildNpcMap();       // ✅ hier
    buildShopNpcMap();   // ✅ hier

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

    const found = DATA._itemMap?.[String(id)];
    if (!found) return String(id);

    if (typeof found === "string")
        return found;

    if (currentLanguage === "jp" && found.old)
        return String(found.old);

    if (found.new)
        return String(found.new);

    return String(id);
}

function getEnemyName(id) {

    const key = String(id);   // 🔥 DAS FEHLT

    const enemy = DATA.EnemyNames?.[key];
    if (!enemy) return id;

    if (typeof enemy === "string")
        return enemy;

    if (currentLanguage === "jp" && enemy.jp)
        return enemy.jp;

    return enemy.en || id;
}

function getStageName(id) {

    const key = String(id);  // 🔥 DAS FEHLT

    const stage = DATA.StageNames?.[key];
    if (!stage) return id;

    if (typeof stage === "string")
        return stage;

    if (currentLanguage === "jp" && stage.jp)
        return stage.jp;

    return stage.en || id;
}

function getQuestName(q) {

    if (!q.comment) return "";

    // alter Stil (String)
    if (typeof q.comment === "string")
        return q.comment;

    // neuer Stil (Objekt)
    if (currentLanguage === "jp" && q.comment.jp)
        return q.comment.jp;

    return q.comment.en || "";
}

function getChannelBadge(channelLabel) {

    let cls = "badge-normal";

    if (channelLabel.includes("Boss"))
        cls = "badge-br";

    if (channelLabel.includes("Collab"))
        cls = "badge-collab";

    if (channelLabel.includes("Custom"))
        cls = "badge-custom";

    return `<div class="channel-badge ${cls}">${channelLabel}</div>`;
}


function card(title, html) {
    return `
        <div class="card">
            <div class="card-title">${title}</div>
            <div class="card-body">
                ${html || ""}
            </div>
        </div>
    `;
}

function buildItemMap() {
    DATA._itemMap = {};

    DATA.Items?.item?.forEach(i => {
        DATA._itemMap[String(i.id)] = i;
    });
}

function getNpcName(id) {

    const npc = DATA._npcMap?.[String(id)];

    if (!npc) return "NPC " + id;

    if (currentLanguage === "jp" && npc.jp)
        return npc.jp;

    return npc.en || id;
}

function buildNpcMap() {

    DATA._npcMap = {};

    DATA.NpcNamesRaw?.forEach(row => {

        if (!row || row.length < 3) return;

        const raw = row[0];
        if (!raw) return;

        const id = raw.replace("NPC_NAME_", "").trim();

        DATA._npcMap[id] = {
            en: row[1]?.trim(),
            jp: row[2]?.trim()
        };
    });
}

function buildShopNpcMap() {

    DATA._shopNpcMap = {};

    if (!DATA.ShopFunctions) return;

    Object.values(DATA.ShopFunctions).forEach(list => {

        list.forEach(entry => {

            const shopId = String(entry.ShopId);
            const npcId = String(entry.NpcId);

            if (!DATA._shopNpcMap[shopId])
                DATA._shopNpcMap[shopId] = new Set();

            DATA._shopNpcMap[shopId].add(npcId);
        });
    });
}

function getShopNames(shopId) {

    const npcSet = DATA._shopNpcMap?.[String(shopId)];
    if (!npcSet) return [];

    const names = [];

    npcSet.forEach(npcId => {
        names.push(getNpcName(npcId));
    });

    return names;
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

    updateUI(); // 🔥 DAS FEHLT

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

let searchTimeout;

document.getElementById("searchBox")
?.addEventListener("input", () => {

    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
        renderHome();
    }, 250); // wartet 250ms nach dem Tippen
});
	
document.getElementById("languageSelect")
?.addEventListener("change", (e) => {
    currentLanguage = e.target.value;
    router(); // 🔥 wichtig!
});

document.getElementById("channelSelect")
?.addEventListener("change", (e) => {
    currentChannelFilter = e.target.value;
    router();
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

    SPAWN_CHANNELS.forEach(channel => {

    if (
        currentChannelFilter !== "all" &&
        currentChannelFilter !== channel.label
    ) return;
        const data = DATA[channel.key];
        data?.enemies?.forEach(e => ids.add(e[5]));
    });

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

    let body = "";

    SPAWN_CHANNELS.forEach(channel => {

    if (
        currentChannelFilter !== "all" &&
        currentChannelFilter !== channel.label
    ) return;

        const data = DATA[channel.key];
        if (!data?.enemies) return;

        const stageMap = new Map();
        const dropIds = new Set();

        data.enemies.forEach(e => {
            if (String(e[5]) !== String(id)) return;

            if (!stageMap.has(e[0])) stageMap.set(e[0], []);
            stageMap.get(e[0]).push(e[9]);

            if (e[27]) dropIds.add(e[27]);
        });

body += getChannelBadge(channel.label);

if (stageMap.size === 0 && dropIds.size === 0) {
    body += `<div style="opacity:.5">No spawn in this channel</div><br>`;
    return;
}

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

            body += "<br><em>Drops</em>";

            dropIds.forEach(dropId=>{
                const table =
                    data?.dropsTables
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

        body += "<br>";
    });

    document.getElementById("content").innerHTML =
        card(getEnemyName(id), body);
}

/* =========================================================
   ITEMS
========================================================= */

function renderItems(filter="") {

    let html = "";

    DATA.Items?.item?.forEach(i => {

        const rawName = getItemName(i.id);

        if (!rawName) return;

        const name = String(rawName);   // 🔥 FIX

        if (!name.toLowerCase().includes(filter)) return;

        html += `
            <div class="card">
                <h3 onclick="navigate('?item=${i.id}')"
                    style="cursor:pointer">
                    ${name}
                </h3>
            </div>
        `;
    });

    document.getElementById("content").innerHTML = html;
}

function openItem(id) {

    let body = "";

    /* =========================
       DROPPED BY (CHANNEL AWARE)
    ========================== */

    SPAWN_CHANNELS.forEach(channel => {

    if (
        currentChannelFilter !== "all" &&
        currentChannelFilter !== channel.label
    ) return;

        const data = DATA[channel.key];
        if (!data?.enemies) return;

        const droppedSet = new Set();

        data.enemies.forEach(e => {

            const table =
                data?.dropsTables
                    ?.find(t => t.id == e[27]);

            table?.items?.forEach(i => {
                if (String(i[0]) === String(id)) {
                    droppedSet.add(e[5]);
                }
            });
        });

        if (droppedSet.size === 0) return;

        body += `<strong>${UI[currentLanguage].droppedBy} – ${channel.label}</strong>`;

        droppedSet.forEach(enemyId => {
            body += `
                <div onclick="navigate('?monster=${enemyId}')"
                     style="cursor:pointer">
                    ${getEnemyName(enemyId)}
                </div>
            `;
        });

        body += "<br>";
    });

    /* =========================
       SOLD IN
    ========================== */

    body += `<strong>${UI[currentLanguage].soldIn}</strong>`;

    SHOP_CHANNELS.forEach(channel => {

    if (
        currentChannelFilter !== "all" &&
        currentChannelFilter !== channel.label
    ) return;

    const shops = DATA[channel.key];
    if (!shops) return;

    shops.forEach(shop => {
        shop?.Data?.GoodsParamList?.forEach(g => {
            if (String(g.ItemId) === String(id)) {

                getShopNames(shop.ShopId)
                    .forEach(name => {

                        body += `
                            <div onclick="navigate('?shop=${shop.ShopId}&npc=${encodeURIComponent(name)}&channel=${channel.key}')"
                                 style="cursor:pointer">
                                ${name} - ${g.Price} ${getWalletDisplay(g.WalletType)}
                            </div>
                        `;
                    });
            }
        });
    });

/* =========================
   GATHERED (CHANNEL AWARE)
========================= */

GATHERING_CHANNELS.forEach(channel => {

    if (
        currentChannelFilter !== "all" &&
        currentChannelFilter !== channel.label
    ) return;

    const data = DATA[channel.key];
    if (!data || data.length === 0) return;

    const gatheredStages = new Set();

    data.forEach(r => {
        if (String(r[4]) === String(id)) {
            gatheredStages.add(r[0]);
        }
    });

    if (gatheredStages.size === 0) return;

    body += `<br><strong>${UI[currentLanguage].gatheredAt} – ${channel.label}</strong>`;

    gatheredStages.forEach(stage => {
        body += `
            <div onclick="navigate('?stage=${stage}')"
                 style="cursor:pointer">
                ${getStageName(stage)}
            </div>
        `;
    });
});

    /* =========================
       CRAFTED FROM
    ========================== */

    let craftedFound = false;

    DATA.Crafting?.forEach(cat => {
        cat.RecipeList?.forEach(r => {

            if (String(r.ItemID) === String(id)) {

                if (!craftedFound) {
                    body += `<br><strong>${UI[currentLanguage].craftedFrom}</strong>`;
                    craftedFound = true;
                }

                r.CraftMaterialList?.forEach(m => {
                    body += `
                        <div onclick="navigate('?item=${m.ItemId}')"
                             style="cursor:pointer">
                            ${getItemName(m.ItemId)} x${m.Num}
                        </div>
                    `;
                });
            }
        });
    });

    /* =========================
       GRADE UP FROM
    ========================== */

    let gradeFound = false;

    DATA.CraftingPlus?.forEach(cat => {
        cat.RecipeList?.forEach(r => {

            if (String(r.GradeupItemID) === String(id)) {

                if (!gradeFound) {
                    body += `<br><strong>${UI[currentLanguage].gradeUpFrom}</strong>`;
                    gradeFound = true;
                }

                body += `
                    <div onclick="navigate('?item=${r.ItemID}')"
                         style="cursor:pointer">
                        ${getItemName(r.ItemID)}
                    </div>
                `;
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
        if (!String(name).toLowerCase().includes(filter)) return;

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

    let body = "";

    SPAWN_CHANNELS.forEach(channel => {

    if (
        currentChannelFilter !== "all" &&
        currentChannelFilter !== channel.label
    ) return;

        const data = DATA[channel.key];
        if (!data?.enemies) return;

        const map = new Map();

        data.enemies.forEach(e => {
            if (String(e[0]) !== String(id)) return;

            if (!map.has(e[5])) map.set(e[5], []);
            map.get(e[5]).push(e[9]);
        });

        if (map.size === 0) return;

        body += getChannelBadge(channel.label);

        map.forEach((levels, enemyId) => {

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

        body += "<br>";
    });

    document.getElementById("content").innerHTML =
        card(getStageName(id), body);
}

/* =========================================================
   SHOPS
========================================================= */

function renderShops(filter="") {

    let html = "";

    SHOP_CHANNELS.forEach(channel => {

        if (
            currentChannelFilter !== "all" &&
            currentChannelFilter !== channel.label
        ) return;

        const shops = DATA[channel.key];
        if (!shops) return;

        shops.forEach(shop => {

            const shopId = String(shop.ShopId);
            const npcSet = DATA._shopNpcMap?.[shopId];
            if (!npcSet) return;

            npcSet.forEach(npcId => {

                const npcName = getNpcName(npcId);

                if (!npcName.toLowerCase().includes(filter)) return;

                html += `
                    <div class="card">
                        <h3 onclick="navigate('?shop=${shopId}&npc=${npcId}&channel=${channel.key}')"
                            style="cursor:pointer">
                            ${npcName}
                        </h3>
                    </div>
                `;
            });
        });
    });

    document.getElementById("content").innerHTML = html;
}

function openShop(id) {

    const params = new URLSearchParams(window.location.search);
    const npcId = params.get("npc");
    const channelKey = params.get("channel");

    let shops = [];

    if (channelKey && DATA[channelKey])
        shops = DATA[channelKey];
    else
        shops = DATA.ShopsNormal;

    const shop =
        shops?.find(s => String(s.ShopId) === String(id));

    if (!shop) return;

    let body = "";

    body += getChannelBadge(
        SHOP_CHANNELS.find(c => c.key === channelKey)?.label
        || "Normal Channel"
    );

    shop.Data?.GoodsParamList?.forEach(i => {
        body += `
            <div onclick="navigate('?item=${i.ItemId}')"
                 style="cursor:pointer">
                ${getItemName(i.ItemId)}
                - ${i.Price} ${getWalletDisplay(i.WalletType)}
            </div>
        `;
    });

    const title = npcId ? getNpcName(npcId) : "Shop " + id;

    document.getElementById("content").innerHTML =
        card(title, body);
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
body += `
    <div onclick="navigate('?item=${p.item_id}')"
         style="cursor:pointer">
        ${getItemName(p.item_id)}
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

function renderGathering(filter="") {

    let html = "";

    GATHERING_CHANNELS.forEach(channel => {

    if (
        currentChannelFilter !== "all" &&
        currentChannelFilter !== channel.label
    ) return;

        const data = DATA[channel.key];
        if (!data || data.length === 0) return;

        const map = new Map();

        data.forEach(r => {

            const stage = r[0];
            const item = r[4];

            const itemName = (getItemName(item) || "").toLowerCase();
            const stageName = (getStageName(stage) || "").toLowerCase();

            if (
                filter &&
                !itemName.includes(filter) &&
                !stageName.includes(filter)
            ) return;

            if (!map.has(stage)) map.set(stage, new Set());
            map.get(stage).add(item);
        });

        if (map.size === 0) return;

        html += getChannelBadge(channel.label);

        map.forEach((items, stage) => {

            let body = "";

            items.forEach(i => {
                body += `
                    <div onclick="navigate('?item=${i}')"
                         style="cursor:pointer">
                        ${getItemName(i)}
                    </div>`;
            });

            html += card(getStageName(stage), body);
        });

        html += "<br>";
    });

    document.getElementById("content").innerHTML = html;
}

/* =========================================================
   QUESTS
========================================================= */

function renderQuests(filter=""){

    let html="";

    DATA.Quests?.forEach(q=>{

        // 🔎 Search Filter
        const questName = getQuestName(q);

if (!questName.toLowerCase().includes(filter)) return;

        // 🏷 Category Filter
        if (
            currentQuestCategory !== "All" &&
            q.type !== currentQuestCategory
        ) return;

        html+=`
            <div class="card">
                <h3 onclick="navigate('?quest=${q._fileId}')"
                    style="cursor:pointer">
                    ${getQuestName(q)}
                </h3>
                <div style="font-size:12px;opacity:.6">
                    ${q.type || UI[currentLanguage].unknown}
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
<div class="quest-badge">${q.type || "Unknown"}</div>
        <div>${UI[currentLanguage].baseLevel}: ${q.base_level}</div>
        <br>
    `;

    if(q.rewards){
        body += `<strong>${UI[currentLanguage].rewards}:</strong>`;

        q.rewards.forEach(r=>{

            if(r.type==="select"){
                r.loot_pool?.forEach(i=>{
                    body+=`
                        <div>
                            ${getItemName(i.item_id)}
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
                body+=`<div>${UI[currentLanguage].exp}: ${r.amount}</div>`;
            }
        });
    }

    document.getElementById("content").innerHTML =
        card(getQuestName(q), body);
}

/* =========================================================
   CRAFTING
========================================================= */

function renderCrafting(filter=""){

    let html="";

    DATA.Crafting?.forEach(cat=>{
        cat.RecipeList?.forEach(r=>{

const name = String(getItemName(r.ItemID) || "");
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

const name = String(getItemName(r.ItemID) || "");
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