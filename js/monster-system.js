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

    const enemyData = DATA["enemy-names.json"];
    const itemData = DATA["item_names.json"];
    const stageData = DATA["stage-names.json"];
    const shopData = DATA["Shop.json"];
    const specialData = DATA["SpecialShops.json"];

    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    let html = `<h2>Search Results</h2>`;

    let foundSomething = false;

    /* =========================
       ENEMIES
    ========================== */

    if (currentFilter === "all" || currentFilter === "enemy"){

        for (const id in enemyData){

            if (enemyData[id].toLowerCase().includes(value)){

                html += `
                    <a href="#" class="link"
                       onclick="navigate('?monster=${id}'); return false;">
                       🐲 ${enemyData[id]}
                    </a>
                `;

                foundSomething = true;
            }
        }
    }

    /* =========================
       ITEMS
    ========================== */

    if (currentFilter === "all" || currentFilter === "item"){

        itemData?.item?.forEach(item => {

            if (item.new?.toLowerCase().includes(value)){

                html += `
                    <a href="#" class="link"
                       onclick="navigate('?item=${item.id}'); return false;">
                       📦 ${item.new}
                    </a>
                `;

                foundSomething = true;
            }

        });
    }

    /* =========================
       STAGES
    ========================== */

    if (currentFilter === "all" || currentFilter === "stage"){

        for (const id in stageData){

            if (stageData[id].en.toLowerCase().includes(value)){

                html += `
                    <a href="#" class="link"
                       onclick="navigate('?stage=${id}'); return false;">
                       🗺 ${stageData[id].en}
                    </a>
                `;

                foundSomething = true;
            }
        }
    }

    /* =========================
       SHOPS
    ========================== */

    if (currentFilter === "all" || currentFilter === "shop"){

        shopData?.forEach(shop => {

            if (String(shop.ShopId).includes(value)){

                html += `
                    <a href="#" class="link"
                       onclick="navigate('?shop=${shop.ShopId}'); return false;">
                       🏪 Shop ${shop.ShopId}
                    </a>
                `;

                foundSomething = true;
            }
        });
    }

    /* =========================
       SPECIAL SHOPS
    ========================== */

    if (currentFilter === "all" || currentFilter === "special"){

        specialData?.shops?.forEach((shop,index) => {

            if (shop.shop_type.toLowerCase().includes(value)){

                html += `
                    <a href="#" class="link"
                       onclick="navigate('?special=${index}'); return false;">
                       ⭐ ${shop.shop_type}
                    </a>
                `;

                foundSomething = true;
            }
        });
    }

    if (!foundSomething){
        html += `<div>No results found.</div>`;
    }

    card.innerHTML = html;
    content.appendChild(card);
}


/* ---------------- INIT ---------------- */

const waitForData = setInterval(() => {
    if (window.dataLoaded){
        clearInterval(waitForData);
        router();
    }
},100);
