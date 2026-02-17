/* ============================= */
/* SHOP LIST */
/* ============================= */

function renderShopList() {

    const shopData = DATA["Shop.json"];
    if (!shopData) return;

    const content = document.getElementById("content");
    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    let html = `<h2>Shops</h2>`;

    shopData.forEach(shop => {

        html += `
            <div class="drop-item">
                <a href="#" class="link"
                   onclick="navigate('?shop=${shop.ShopId}'); return false;">
                    Shop ${shop.ShopId}
                </a>
            </div>
        `;
    });

    card.innerHTML = html;
    content.appendChild(card);
}


/* ============================= */
/* SINGLE SHOP DETAIL */
/* ============================= */

function openShop(shopId) {

    const shopData = DATA["Shop.json"];
    if (!shopData) return;

    const shop = shopData.find(s => String(s.ShopId) === String(shopId));
    if (!shop) return;

    const content = document.getElementById("content");
    content.innerHTML = "";

    const goods = shop.Data.GoodsParamList;

    const card = document.createElement("div");
    card.className = "card";

    let html = `
        <h2>Shop ${shopId}</h2>
        <h3>Items</h3>
    `;

    goods.forEach(item => {

        const name = getItemName(item.ItemId);

        html += `
            <div class="drop-item">
                <a href="#" class="link"
                   onclick="navigate('?item=${item.ItemId}'); return false;">
                    ${name}
                </a>
                - ${item.Price} Gold
            </div>
        `;
    });

    html += `
        <br>
        <a href="#" class="link"
           onclick="navigate('?shops'); return false;">
           ← Back to Shops
        </a>
    `;

    card.innerHTML = html;
    content.appendChild(card);
}
