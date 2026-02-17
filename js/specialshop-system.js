function openSpecialShop(shopType) {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const data = DATA["SpecialShops.json"];
    const shop = data.shops.find(s => s.shop_type === shopType);

    if (!shop) {
        content.innerHTML = "<div class='card'>Special Shop not found</div>";
        return;
    }

    const card = document.createElement("div");
    card.className = "card";

    let html = `<h2>${shop.shop_type}</h2>`;

    shop.categories.forEach(cat => {

        html += `<h3>${cat.label}</h3>`;

        cat.appraisals.forEach(app => {

            html += `<div style="margin-bottom:12px;">`;

            html += `<strong>${app.label}</strong><br>`;

            if (app.base_items) {
                html += `Cost:<br>`;
                app.base_items.forEach(b => {
                    html += `
                        - ${b.amount}x 
                        <a href="#" class="link"
                           onclick="navigate('?item=${b.item_id}'); return false;">
                           ${getItemName(b.item_id)}
                        </a><br>
                    `;
                });
            }

            if (app.pool) {
                html += `Reward:<br>`;
                app.pool.forEach(p => {
                    html += `
                        → ${p.amount}x 
                        <a href="#" class="link"
                           onclick="navigate('?item=${p.item_id}'); return false;">
                           ${getItemName(p.item_id)}
                        </a><br>
                    `;
                });
            }

            html += `</div>`;
        });
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
