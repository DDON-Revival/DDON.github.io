function getItemName(id){
    const items = DATA.Items?.item;
    if (!items) return id;
    const found = items.find(i => String(i.id) === String(id));
    return found ? found.new : id;
}

function renderDrops(dropTableId){

    const tables = DATA.EnemySpawn?.DropTables;
    if (!tables) return "";

    const table = tables.find(t => t.id == dropTableId);
    if (!table) return "";

    let html = "";

    table.items.forEach(item => {

        const itemId = item[0];
        const min = item[1];
        const max = item[2];
        const chance = Math.round(item[5] * 100);

        html += `
            <div class="drop-item">
                <a href="#" onclick="navigate('?item=${itemId}')">
                    ${getItemName(itemId)}
                </a>
                (${min}${max > 1 ? "-" + max : ""})
                - ${chance}%
            </div>
        `;
    });

    return html;
}
