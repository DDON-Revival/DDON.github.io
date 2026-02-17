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

    let html = `<h2>Search Results for "${value}"</h2>`;

    let foundSomething = false;

    /* ================= ENEMIES ================= */

    if (currentFilter === "all" || currentFilter === "enemy"){

        let enemyMatches = [];

        for (const id in enemyData){
            if (enemyData[id].toLowerCase().includes(value)){
                enemyMatches.push({id, name: enemyData[id]});
            }
        }

        if (enemyMatches.length){
            foundSomething = true;
            html += `<h3>Enemies</h3>`;

            enemyMatches
                .sort((a,b)=>a.name.localeCompare(b.name))
                .forEach(e=>{
                    html += `
                        <a href="#" class="link"
                           onclick="navigate('?monster=${e.id}'); return false;">
                            ${e.name}
                        </a>
                    `;
                });
        }
    }

    /* ================= ITEMS ================= */

    if (currentFilter === "all" || currentFilter === "item"){

        let itemMatches = [];

        if (itemData?.item){
            itemData.item.forEach(item=>{
                if (item.new?.toLowerCase().includes(value)){
                    itemMatches.push(item);
                }
            });
        }

        if (itemMatches.length){
            foundSomething = true;
            html += `<h3>Items</h3>`;

            itemMatches
                .sort((a,b)=>a.new.localeCompare(b.new))
                .forEach(item=>{
                    html += `
                        <a href="#" class="link"
                           onclick="navigate('?item=${item.id}'); return false;">
                            ${item.new}
                        </a>
                    `;
                });
        }
    }

    /* ================= STAGES ================= */

    if (currentFilter === "all" || currentFilter === "stage"){

        let stageMatches = [];

        for (const id in stageData){
            if (stageData[id].en.toLowerCase().includes(value)){
                stageMatches.push({id, name: stageData[id].en});
            }
        }

        if (stageMatches.length){
            foundSomething = true;
            html += `<h3>Stages</h3>`;

            stageMatches
                .sort((a,b)=>a.name.localeCompare(b.name))
                .forEach(stage=>{
                    html += `
                        <a href="#" class="link"
                           onclick="navigate('?stage=${stage.id}'); return false;">
                            ${stage.name}
                        </a>
                    `;
                });
        }
    }

    /* ================= SHOPS ================= */

    if (currentFilter === "all" || currentFilter === "shop"){

        let shopMatches = [];

        if (shopData){
            shopData.forEach(shop=>{
                if (String(shop.ShopId).includes(value)){
                    shopMatches.push(shop);
                }
            });
        }

        if (shopMatches.length){
            foundSomething = true;
            html += `<h3>Shops</h3>`;

            shopMatches.forEach(shop=>{
                html += `
                    <a href="#" class="link"
                       onclick="navigate('?shop=${shop.ShopId}'); return false;">
                        Shop ${shop.ShopId}
                    </a>
                `;
            });
        }
    }

    /* ================= SPECIAL ================= */

    if (currentFilter === "all" || currentFilter === "special"){

        if (specialData?.shops){

            let specialMatches = [];

            specialData.shops.forEach((shop,index)=>{
                if (shop.shop_type.toLowerCase().includes(value)){
                    specialMatches.push({index, name: shop.shop_type});
                }
            });

            if (specialMatches.length){
                foundSomething = true;
                html += `<h3>Special Shops</h3>`;

                specialMatches.forEach(shop=>{
                    html += `
                        <a href="#" class="link"
                           onclick="navigate('?special=${shop.index}'); return false;">
                            ${shop.name}
                        </a>
                    `;
                });
            }
        }
    }

    if (!foundSomething){
        html += `<p style="opacity:0.6;">No results found.</p>`;
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
