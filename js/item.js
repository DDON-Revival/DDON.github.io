function getItemName(id){
    const items = DATA["item_names.json"]?.item;
    const found = items?.find(i=>String(i.id)===String(id));
    return found ? found.new : id;
}

function openItem(itemId){

    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    let html = `
        <h2>${getItemName(itemId)}</h2>
        <h3>Dropped By</h3>
    `;

    const enemies = DATA["EnemySpawn.json"].enemies;
    const dropTables = DATA["EnemySpawn.json"].dropsTables;

    dropTables.forEach(table=>{
        table.items.forEach(item=>{
            if(String(item[0])===String(itemId)){
                enemies
                .filter(e=>e[27]==table.id)
                .forEach(e=>{
                    html+=`
                        <div>
                            <a href="#" onclick="navigate('?monster=${e[5]}'); return false;">
                                ${getEnemyName(e[5])}
                            </a>
                        </div>
                    `;
                });
            }
        });
    });

    html+=`
        <br><a href="#" onclick="navigate('?'); return false;">← Back</a>
    `;

    card.innerHTML = html;
    content.appendChild(card);
}
