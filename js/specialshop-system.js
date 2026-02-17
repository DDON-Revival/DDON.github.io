function openSpecialShop(index) {

    const data = DATA["SpecialShops.json"];
    if (!data || !data.shops) return;

    const shop = data.shops[index];
    if (!shop) return;

    const content = document.getElementById("content");
    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    let html = `<h2>${shop.shop_type}</h2>`;

    shop.categories.forEach(category => {

        html += `<h3>${category.label}</h3>`;

        category.appraisals.forEach(app => {

            app.pool.forEach(item => {

                html += `
                    <div class="drop-item">
                        <a href="#" class="link"
                           onclick="navigate('?item=${item.item_id}'); return false;">
                            ${item.name}
                        </a>
                `;

                // Crest Anzeige
                if (item.crests) {
                    item.crests.forEach(crest => {
                        html += `
                            <div style="margin-left:15px; font-size:13px; opacity:0.8;">
                                Crest ID: ${crest.crest_id}
                            </div>
                        `;
                    });
                }

                html += `</div>`;
            });

        });
    });

    html += `
        <br>
        <a href="#" class="link"
           onclick="navigate('?special'); return false;">
           ← Back to Special Shops
        </a>
    `;


/* ======================================= */
/* LIST VIEW */
/* ======================================= */

function renderSpecialShopList() {

    const data = DATA["SpecialShops.json"];
    if (!data || !data.shops) return;

    const content = document.getElementById("content");
    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    let html = `<h2>Special Shops</h2>`;

    data.shops.forEach((shop, index) => {

        html += `
            <div class="drop-item">
                <a href="#" class="link"
                   onclick="navigate('?special=${index}'); return false;">
                    ${shop.shop_type}
                </a>
            </div>
        `;
    });

    card.innerHTML = html;
    content.appendChild(card);
}
