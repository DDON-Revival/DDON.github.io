const searchInput = document.getElementById("searchBox");
const searchFilters = document.getElementById("searchFilters");
const content = document.getElementById("content");

let currentFilter = "all";

/* ---------------- FILTER BUTTONS ---------------- */

searchFilters.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", () => {

        searchFilters.querySelectorAll("button")
            .forEach(b => b.classList.remove("active"));

        btn.classList.add("active");
        currentFilter = btn.dataset.type;

        performSearch(searchInput.value.toLowerCase().trim());
    });

});

/* ---------------- SEARCH INPUT ---------------- */

searchInput.addEventListener("input", (e) => {
    performSearch(e.target.value.toLowerCase().trim());
});

/* ---------------- MAIN SEARCH ---------------- */

function performSearch(value){

    if (!value){
        navigate("?");
        return;
    }

    const enemyData   = DATA["enemy-names.json"];
    const itemData    = DATA["item_names.json"];
    const stageData   = DATA["stage-names.json"];
    const shopData    = DATA["Shop.json"];
    const specialData = DATA["SpecialShops.json"];

    /* =========================
       ENEMY SEARCH
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
       ITEM SEARCH
    ========================== */

    if (currentFilter === "all" || currentFilter === "item"){

        if (itemData?.item){
            for (const item of itemData.item){

                if (item.new?.toLowerCase().includes(value)){
                    navigate(`?item=${item.id}`);
                    return;
                }
            }
        }
    }

    /* =========================
       STAGE SEARCH
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
       SHOP SEARCH
    ========================== */

    if (currentFilter === "all" || currentFilter === "shop"){

        if (shopData){
            for (const shop of shopData){

                if (String(shop.ShopId).includes(value)){
                    navigate(`?shop=${shop.ShopId}`);
                    return;
                }
            }
        }
    }

    /* =========================
       SPECIAL SHOP SEARCH
    ========================== */

    if (currentFilter === "all" || currentFilter === "special"){

        if (specialData?.shops){
            for (let i = 0; i < specialData.shops.length; i++){

                if (specialData.shops[i].shop_type.toLowerCase().includes(value)){
                    navigate(`?special=${i}`);
                    return;
                }
            }
        }
    }

    /* =========================
       FALLBACK → MONSTER FILTER LIST
    ========================== */

    renderMonsterList(value);
}


/* ---------------- INIT ---------------- */

const waitForData = setInterval(() => {
    if (window.dataLoaded){
        clearInterval(waitForData);
        router();
    }
},100);
