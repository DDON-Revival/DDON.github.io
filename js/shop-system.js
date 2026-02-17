function renderShopList(){

    const shopData = DATA["Shop.json"];
    if(!shopData) return;

    content.innerHTML = "";

    shopData.forEach(shop=>{

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <a href="#" class="link"
               onclick="navigate('?shop=${shop.ShopId}'); return false;">
               Shop ${shop.ShopId}
            </a>
        `;

        content.appendChild(card);
    });
}

function searchShops(value){

    const shopData = DATA["Shop.json"];
    if(!shopData) return;

    shopData.forEach(shop=>{
        if(String(shop.ShopId).includes(value)){
            openShop(shop.ShopId);
        }
    });
}

function openShop(shopId){

    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>Shop ${shopId}</h2>
        <br>
        <a href="#" class="link"
           onclick="showDefaultView(); return false;">
           ← Back
        </a>
    `;

    content.appendChild(card);
}
