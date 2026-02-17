const searchInput   = document.getElementById("searchBox");
const searchFilters = document.getElementById("searchFilters");
const content       = document.getElementById("content");

let currentFilter = "all";

/* =====================================================
   HELPERS
===================================================== */

function getEnemyName(enemyId){
    return DATA["enemy-names.json"]?.[enemyId] || enemyId;
}

function getStageName(stageId){
    const stage = DATA["stage-names.json"]?.[stageId];
    return stage ? stage.en : stageId;
}

/* =====================================================
   SINGLE MONSTER PAGE
===================================================== */

function renderSingleMonster(enemyId){

    const enemies = DATA["EnemySpawn.json"].enemies;
    content.innerHTML = "";

    const filtered = enemies.filter(e => String(e[5]) === String(enemyId));
    if (!filtered.length) return;

    const card = document.createElement("div");
    card.className = "card";

    let html = `
        <h2>${getEnemyName(enemyId)}</h2>
        <p><strong>ID:</strong> ${enemyId}</p>
        <h3>Spawn Locations</h3>
    `;

    const stageMap = new Map();

    filtered.forEach(e => {
        const stageId = e[0];
        const level   = e[9];

        if (!stageMap.has(stageId))
            stageMap.set(stageId,new Set());

        stageMap.get(stageId).add(level);
    });

    [...stageMap.entries()]
        .sort((a,b)=>getStageName(a[0]).localeCompare(getStageName(b[0])))
        .forEach(([stageId,levels])=>{

            const sorted=[...levels].sort((a,b)=>a-b);
            const min=sorted[0];
            const max=sorted[sorted.length-1];

            const levelDisplay=min===max?`Lv ${min}`:`Lv ${min}-${max}`;

            html+=`
                <a href="#" class="link"
                   onclick="navigate('?stage=${stageId}'); return false;">
                   ${getStageName(stageId)} (${levelDisplay})
                </a>
            `;
        });

    html+=`<h3>Drops</h3>`;
    html+=renderDrops(filtered[0][27]);

    html+=`
        <br><br>
        <a href="#" class="link"
           onclick="navigate('?'); return false;">
           ← Back
        </a>
    `;

    card.innerHTML=html;
    content.appendChild(card);
}

/* =====================================================
   MONSTER LIST (FILTERED)
===================================================== */

function renderMonsterList(filter=""){

    if (!DATA["EnemySpawn.json"]) return;

    content.innerHTML="";

    const enemies = DATA["EnemySpawn.json"].enemies;
    const monsterMap = new Map();

    enemies.forEach(e=>{

        const stageId=e[0];
        const enemyId=e[5];
        const level=e[9];
        const dropTableId=e[27];

        if (!monsterMap.has(enemyId)){
            monsterMap.set(enemyId,{
                stages:new Map(),
                dropTableId:dropTableId
            });
        }

        const data=monsterMap.get(enemyId);

        if (!data.stages.has(stageId)){
            data.stages.set(stageId,new Set());
        }

        data.stages.get(stageId).add(level);
    });

    monsterMap.forEach((monsterData,enemyId)=>{

        const name=getEnemyName(enemyId);

        if (!name.toLowerCase().includes(filter)) return;

        const card=document.createElement("div");
        card.className="card";

        let html=`
            <h2>
                <a href="#" class="link"
                   onclick="navigate('?monster=${enemyId}'); return false;">
                   ${name}
                </a>
            </h2>
        `;

        card.innerHTML=html;
        content.appendChild(card);
    });
}

/* =====================================================
   FILTER BUTTONS
===================================================== */

searchFilters.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        searchFilters.querySelectorAll("button")
            .forEach(b=>b.classList.remove("active"));

        btn.classList.add("active");
        currentFilter=btn.dataset.type;

        performSearch(searchInput.value.toLowerCase().trim());
    });
});

/* =====================================================
   SEARCH INPUT
===================================================== */

searchInput.addEventListener("input",(e)=>{
    performSearch(e.target.value.toLowerCase().trim());
});

/* =====================================================
   MAIN SEARCH LOGIC
===================================================== */

function performSearch(value){

    const itemData    = DATA["item_names.json"];
    const stageData   = DATA["stage-names.json"];
    const shopData    = DATA["Shop.json"];
    const specialData = DATA["SpecialShops.json"];

    if (!value){

        if (currentFilter === "special"){
            renderSpecialShopList();
            return;
        }

        navigate("?");
        return;
    }

    content.innerHTML="";

    /* ---------------- ENEMIES (LIST MODE) ---------------- */

    if (currentFilter === "all" || currentFilter === "enemy"){
        renderMonsterList(value);
    }

    /* ---------------- ITEMS ---------------- */

    if (currentFilter === "all" || currentFilter === "item"){
        itemData?.item?.forEach(item=>{
            if (item.new?.toLowerCase().includes(value)){
                openItem(item.id);
            }
        });
    }

    /* ---------------- STAGES ---------------- */

    if (currentFilter === "all" || currentFilter === "stage"){
        for (const id in stageData){
            if (stageData[id].en.toLowerCase().includes(value)){
                openStage(id);
            }
        }
    }

    /* ---------------- SHOPS ---------------- */

    if (currentFilter === "all" || currentFilter === "shop"){
        shopData?.forEach(shop=>{
            if (String(shop.ShopId).includes(value)){
                openShop(shop.ShopId);
            }
        });
    }

    /* ---------------- SPECIAL ---------------- */

    if (currentFilter === "all" || currentFilter === "special"){
        specialData?.shops?.forEach((shop,index)=>{
            if (shop.shop_type.toLowerCase().includes(value)){
                openSpecialShop(index);
            }
        });
    }
}

/* =====================================================
   INIT
===================================================== */

const waitForData=setInterval(()=>{
    if(window.dataLoaded){
        clearInterval(waitForData);
        router();
    }
},100);
