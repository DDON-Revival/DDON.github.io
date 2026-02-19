function renderSpecialShopList(filter=""){

    const shops = DATA["SpecialShops.json"]?.shops;
    if (!shops) return;

    content.innerHTML = "";

    shops.forEach((shop,index) => {

        if (!shop.shop_type.toLowerCase().includes(filter)) return;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>${shop.shop_type}</h2>
            <button onclick="openSpecialShop(${index})">Open</button>
        `;

        content.appendChild(card);
    });
}

function openSpecialShop(index){

    const shop = DATA["SpecialShops.json"].shops[index];

    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    let html = `<h2>${shop.shop_type}</h2>`;

    shop.categories.forEach(cat=>{
        html += `<h3>${cat.label}</h3>`;
        cat.appraisals.forEach(app=>{
            app.pool.forEach(item=>{
                html += `<div>${item.name}</div>`;
            });
        });
    });

    html += `<br><button onclick="renderHome()">← Back</button>`;

    card.innerHTML = html;
    content.appendChild(card);
}
