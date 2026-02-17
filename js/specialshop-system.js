function renderSpecialShopList(){

    const data = DATA["SpecialShops.json"];
    if(!data?.shops) return;

    content.innerHTML = "";

    data.shops.forEach((shop,index)=>{

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <a href="#" class="link"
               onclick="navigate('?special=${index}'); return false;">
               ${shop.shop_type}
            </a>
        `;

        content.appendChild(card);
    });
}

function searchSpecialShops(value){

    const data = DATA["SpecialShops.json"];
    if(!data?.shops) return;

    data.shops.forEach((shop,index)=>{
        if(shop.shop_type.toLowerCase().includes(value)){
            openSpecialShop(index);
        }
    });
}

function openSpecialShop(index){

    content.innerHTML = "";

    const data = DATA["SpecialShops.json"];
    const shop = data.shops[index];

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${shop.shop_type}</h2>
        <br>
        <a href="#" class="link"
           onclick="showDefaultView(); return false;">
           ← Back
        </a>
    `;

    content.appendChild(card);
}
