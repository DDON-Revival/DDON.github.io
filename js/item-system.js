function renderItemList(){

    const itemData = DATA["item_names.json"];
    if (!itemData?.item) return;

    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    let html = "<h2>Items</h2>";

    itemData.item.forEach(item=>{
        html += `
            <a href="#" class="link"
               onclick="navigate('?item=${item.id}'); return false;">
               ${item.new}
            </a>
        `;
    });

    card.innerHTML = html;
    content.appendChild(card);
}

function searchItems(value){

    const data = DATA["item_names.json"];
    if(!data?.item) return;

    data.item.forEach(item=>{
        if(item.new?.toLowerCase().includes(value)){
            openItem(item.id);
        }
    });
}

function openItem(itemId){

    content.innerHTML = "";

    const name = getItemName(itemId);

    const card = document.createElement("div");
    card.className = "card";

    let html = `
        <h2>${name}</h2>
        <p><strong>ID:</strong> ${itemId}</p>
        <br>
        <a href="#" class="link"
           onclick="showDefaultView(); return false;">
           ← Back
        </a>
    `;

    card.innerHTML = html;
    content.appendChild(card);
}
