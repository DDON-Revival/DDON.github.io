function openShop(shopId) {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const shops = DATA["shop.json"];

    const shop = shops.find(s => String(s.ShopId) === String(shopId));

    if (!shop) {
        content.innerHTML = "<div class='card'>Shop not found</div>";
        return;
    }

    const card = document.createElement("div");
    card.className = "card";

    let html = `
        <h2>Shop ID ${shop.ShopId}</h2>
        <h3>Items</h3>
    `;

    shop.Data.GoodsParamList.forEach(g => {

        const itemName = getItemName(g.ItemId);

        html += `
            <div class="drop-item">
                <a href="#" class="link"
                   onclick="navigate('?item=${g.ItemId}'); return false;">
                    ${itemName}
                </a>
                — ${g.Price} Gold
            </div>
        `;
    });

    html += `
        <br>
        <a href="#" class="link"
           onclick="renderMonsterList(); return false;">
           ← Back
        </a>
    `;

    card.innerHTML = html;
    content.appendChild(card);
}
