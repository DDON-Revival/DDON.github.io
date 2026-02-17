const searchInput   = document.getElementById("searchBox");
const searchFilters = document.getElementById("searchFilters");
const content       = document.getElementById("content");

let currentFilter = "all";

/* =========================================
   HELPERS
========================================= */

function getEnemyName(enemyId){
    return DATA["enemy-names.json"]?.[enemyId] || enemyId;
}

function getStageName(stageId){
    const stage = DATA["stage-names.json"]?.[stageId];
    return stage ? stage.en : stageId;
}

/* =========================================
   MONSTER LIST
========================================= */

function renderMonsterList(filter=""){

    if (!DATA["EnemySpawn.json"]) return;

    content.innerHTML = "";

    const enemies = DATA["EnemySpawn.json"].enemies;
    const unique = new Set();

    enemies.forEach(e => unique.add(e[5]));

    [...unique].forEach(enemyId => {

        const name = getEnemyName(enemyId).toLowerCase();

        if (filter && !name.includes(filter)) return;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>
                <a href="#" class="link"
                   onclick="navigate('?monster=${enemyId}'); return false;">
                   ${getEnemyName(enemyId)}
                </a>
            </h2>
        `;

        content.appendChild(card);
    });
}

/* =========================================
   SEARCH + FILTER LOGIC
========================================= */

searchFilters.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>{
        searchFilters.querySelectorAll("button")
            .forEach(b=>b.classList.remove("active"));

        btn.classList.add("active");
        currentFilter = btn.dataset.type;

        searchInput.value = "";
        showDefaultView();
    });
});

searchInput.addEventListener("input",(e)=>{
    performSearch(e.target.value.toLowerCase().trim());
});

function showDefaultView(){

    if(currentFilter === "all" || currentFilter === "enemy"){
        renderMonsterList();
    }

    if(currentFilter === "item"){
        renderItemList();
    }

    if(currentFilter === "stage"){
        renderStageList();
    }

    if(currentFilter === "shop"){
        renderShopList();
    }

    if(currentFilter === "special"){
        renderSpecialShopList();
    }
}

function performSearch(value){

    const itemData    = DATA["item_names.json"];
    const stageData   = DATA["stage-names.json"];
    const shopData    = DATA["Shop.json"];
    const specialData = DATA["SpecialShops.json"];
    const enemyData   = DATA["enemy-names.json"];

    if (!value){

        switch(currentFilter){
            case "enemy":
            case "all":
                navigate("?");
                return;

            case "item":
                renderItemList();
                return;

            case "stage":
                renderStageList();
                return;

            case "shop":
                renderShopList();
                return;

            case "special":
                renderSpecialShopList();
                return;
        }
    }

    /* =========================
       ENEMIES
    ========================== */

    if (currentFilter === "all" || currentFilter === "enemy"){

        for (const id in enemyData){
            if (enemyData[id].toLowerCase().includes(value)){
                navigate(`?monster=${id}`);
                return;
            }
        }
    }

    /* =========================
       ITEMS
    ========================== */

    if (currentFilter === "all" || currentFilter === "item"){

        for (const item of itemData?.item || []){
            if (item.new?.toLowerCase().includes(value)){
                navigate(`?item=${item.id}`);
                return;
            }
        }
    }

    /* =========================
       STAGES
    ========================== */

    if (currentFilter === "all" || currentFilter === "stage"){

        for (const id in stageData){
            if (stageData[id].en.toLowerCase().includes(value)){
                navigate(`?stage=${id}`);
                return;
            }
        }
    }

    /* =========================
       SHOPS
    ========================== */

    if (currentFilter === "all" || currentFilter === "shop"){

        for (const shop of shopData || []){
            if (String(shop.ShopId).includes(value)){
                navigate(`?shop=${shop.ShopId}`);
                return;
            }
        }
    }

    /* =========================
       SPECIAL
    ========================== */

    if (currentFilter === "all" || currentFilter === "special"){

        specialData?.shops?.forEach((shop,index)=>{
            if (shop.shop_type.toLowerCase().includes(value)){
                navigate(`?special=${index}`);
            }
        });
    }
}

/* =========================================
   INIT
========================================= */

const waitForData = setInterval(()=>{
    if(window.dataLoaded){
        clearInterval(waitForData);
        showDefaultView();
    }
},100);
