/* =========================
   SPECIAL SHOP LIST
========================= */

function renderSpecialShopList(filter=""){

    const shops = DATA["SpecialShops.json"]?.shops;
    if (!shops) return;

    content.innerHTML="";

    shops
        .filter(s=>s.shop_type.toLowerCase().includes(filter.toLowerCase()))
        .forEach((shop,index)=>{

            const card=document.createElement("div");
            card.className="card";

            card.innerHTML=`
                <h2>
                    <a href="#" class="link"
                       onclick="navigate('?special=${index}'); return false;">
                       ${shop.shop_type}
                    </a>
                </h2>
            `;

            content.appendChild(card);
        });
}

/* =========================
   SPECIAL SHOP DETAIL
========================= */

function openSpecialShop(index){

    const shop = DATA["SpecialShops.json"]?.shops[index];
    if (!shop) return;

    content.innerHTML="";

    const card=document.createElement("div");
    card.className="card";

    let html=`<h2>${shop.shop_type}</h2>`;

    shop.categories.forEach(cat=>{
        html+=`<h3>${cat.label}</h3>`;

        cat.appraisals.forEach(app=>{
            app.pool.forEach(item=>{
                html+=`
                    <div class="drop-item">
                        <a href="#" class="link"
                           onclick="navigate('?item=${item.item_id}'); return false;">
                           ${item.name}
                        </a>
                    </div>
                `;
            });
        });
    });

    html+=`
        <br><a href="#" class="link"
        onclick="navigate('?special'); return false;">
        ← Back
        </a>
    `;

    card.innerHTML=html;
    content.appendChild(card);
}
