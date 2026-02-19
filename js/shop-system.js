function renderShopList(filter=""){

    const shops = DATA["Shop.json"];
    if (!shops) return;

    content.innerHTML = "";

    shops.forEach(shop => {

        if (!String(shop.ShopId).includes(filter)) return;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>Shop ${shop.ShopId}</h2>
            <button onclick="openShop('${shop.ShopId}')">Open</button>
        `;

        content.appendChild(card);
    });
}

function openShop(id){

    const shop = DATA["Shop.json"].find(s => String(s.ShopId) === String(id));

    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    let html = `<h2>Shop ${id}</h2>`;

    shop.Data.GoodsParamList.forEach(item => {
        html += `<div>${getItemName(item.ItemId)} - ${item.Price} Gold</div>`;
    });

    html += `<br><button onclick="renderHome()">← Back</button>`;

    card.innerHTML = html;
    content.appendChild(card);
}
