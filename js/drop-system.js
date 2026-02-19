function getItemName(itemId) {

    const data = DATA["item_names.json"];
    if (!data?.item) return "Item " + itemId;

    const found = data.item.find(i => String(i.id) === String(itemId));
    return found ? found.new : "Item " + itemId;
}

function renderDrops(dropTableId) {

    if (!DATA["EnemySpawn.json"]) return "";

    const dropTables = DATA["EnemySpawn.json"].DropTables; // FIX

    const table = dropTables.find(t => t.id == dropTableId);
    if (!table) return "";

    let html = "";

    table.items.forEach(item => {

        const itemId = item[0];
        const min = item[1];
        const max = item[2];
        const chance = Math.round(item[5] * 100);

        html += `
            <div class="drop-item">
                <a href="#" class="link"
                   onclick="navigate('?item=${itemId}'); return false;">
                    ${getItemName(itemId)}
                </a>
                (${min}${max > 1 ? "-" + max : ""})
                - ${chance}%
            </div>
        `;
    });

    return html;
}
