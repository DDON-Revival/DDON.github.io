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

    if(!value){
        showDefaultView();
        return;
    }

    content.innerHTML = "";

    if(currentFilter === "all" || currentFilter === "enemy"){
        renderMonsterList(value);
    }

    if(currentFilter === "all" || currentFilter === "item"){
        searchItems(value);
    }

    if(currentFilter === "all" || currentFilter === "stage"){
        searchStages(value);
    }

    if(currentFilter === "all" || currentFilter === "shop"){
        searchShops(value);
    }

    if(currentFilter === "all" || currentFilter === "special"){
        searchSpecialShops(value);
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
