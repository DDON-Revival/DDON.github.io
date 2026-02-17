function openItem(itemId) {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const name = getItemName(itemId);

    const card = document.createElement("div");
    card.className = "card";

    let html = `
        <h2>${name}</h2>
        <p><strong>ID:</strong> ${itemId}</p>
    `;

    /* =========================
       DROPPED BY (Monster)
    ========================== */

    const enemies = DATA["EnemySpawn.json"].enemies;
    const dropTables = DATA["EnemySpawn.json"].dropsTables;

    const monsterSet = new Set();

    dropTables.forEach(table => {

        table.items.forEach(item => {

            if (String(item[0]) !== String(itemId)) return;

            const enemiesUsingTable = enemies.filter(e => e[27] == table.id);

            enemiesUsingTable.forEach(e => {
                monsterSet.add(e[5]);
            });
        });
    });

    if (monsterSet.size > 0) {

        html += `<h3>Dropped By</h3>`;

        [...monsterSet]
            .sort((a,b)=>getEnemyName(a).localeCompare(getEnemyName(b)))
            .forEach(enemyId => {

                html += `
                    <a href="#" class="link"
                       onclick="navigate('?monster=${enemyId}'); return false;">
                        ${getEnemyName(enemyId)}
                    </a>
                `;
            });
    }

    /* =========================
       NORMAL SHOPS
    ========================== */

    const shopData = DATA["Shop.json"];

    if (shopData && Array.isArray(shopData)) {

        const sellingShops = shopData.filter(shop =>
            shop.Data.GoodsParamList.some(g =>
                String(g.ItemId) === String(itemId)
            )
        );

        if (sellingShops.length > 0) {

            html += `<h3>Sold In Shops</h3>`;

            sellingShops.forEach(shop => {

                html += `
                    <a href="#" class="link"
                       onclick="navigate('?shop=${shop.ShopId}'); return false;">
                        Shop ${shop.ShopId}
                    </a>
                `;
            });
        }
    }

    /* =========================
       SPECIAL SHOPS
    ========================== */

    const specialData = DATA["SpecialShops.json"];

    if (specialData && specialData.shops) {

        specialData.shops.forEach((shop, index) => {

            shop.categories.forEach(category => {

                category.appraisals.forEach(app => {

                    app.pool.forEach(item => {

                        if (String(item.item_id) === String(itemId)) {

                            html += `
                                <h3>Available In Special Shop</h3>
                                <a href="#" class="link"
                                   onclick="navigate('?special=${index}'); return false;">
                                    ${shop.shop_type}
                                </a>
                            `;
                        }

                    });

                });

            });

        });
    }

    html += `
        <br><br>
        <a href="#" class="link"
           onclick="navigate('?'); return false;"
            ← Back
        </a>
    `;

    card.innerHTML = html;
    content.appendChild(card);
}
