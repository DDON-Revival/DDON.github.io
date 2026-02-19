/* =========================
   SHOP LIST
========================= */

function renderShopList(filter=""){

    const shops = DATA["Shop.json"];
    if (!shops) return;

    content.innerHTML = "";

    shops
        .filter(s => String(s.ShopId).includes(filter))
        .sort((a,b)=>a.ShopId-b.ShopId)
        .forEach(shop=>{

            const card = document.createElement("div");
            card.className="card";

            card.innerHTML=`
                <h2>
                    <a href="#" class="link"
                       onclick="navigate('?shop=${shop.ShopId}'); return false;">
                       Shop ${shop.ShopId}
                    </a>
                </h2>
            `;

            content.appendChild(card);
        });
}

/* =========================
   SHOP DETAIL
========================= */

function openShop(id){

    const shop = DATA["Shop.json"]
        ?.find(s=>String(s.ShopId)===String(id));

    if (!shop) return;

    content.innerHTML="";

    const card=document.createElement("div");
    card.className="card";

    let html=`<h2>Shop ${id}</h2><h3>Items</h3>`;

    shop.Data.GoodsParamList.forEach(item=>{
        html+=`
            <div class="drop-item">
                <a href="#" class="link"
                   onclick="navigate('?item=${item.ItemId}'); return false;">
                   ${getItemName(item.ItemId)}
                </a>
                - ${item.Price} Gold
            </div>
        `;
    });

    html+=`
        <br><a href="#" class="link"
        onclick="navigate('?shops'); return false;">
        ← Back
        </a>
    `;

    card.innerHTML=html;
    content.appendChild(card);
}
