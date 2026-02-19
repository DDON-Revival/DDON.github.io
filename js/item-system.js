function getItemName(id){
    const items = DATA["item_names.json"]?.item;
    if (!items) return id;

    const found = items.find(i => String(i.id) === String(id));
    return found ? found.new : id;
}

function renderItemList(filter=""){

    const items = DATA["item_names.json"]?.item;
    if (!items) return;

    content.innerHTML = "";

    items.forEach(item => {

        if (!item.new.toLowerCase().includes(filter)) return;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>${item.new}</h2>
            <button onclick="openItem('${item.id}')">Open</button>
        `;

        content.appendChild(card);
    });
}

function openItem(itemId){

    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${getItemName(itemId)}</h2>
        <h3>Dropped By</h3>
        ${renderItemDrops(itemId)}
        <h3>Sold In Shops</h3>
        ${renderItemShops(itemId)}
        <br><br>
        <button onclick="renderHome()">← Back</button>
    `;

    content.appendChild(card);
}
