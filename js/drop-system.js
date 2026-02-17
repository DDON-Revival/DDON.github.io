function getItemName(itemId) {

    const data = DATA["item_names.json"];
    if (!data || !data.item) return "Item " + itemId;

    const found = data.item.find(i => String(i.id) === String(itemId));

    return found ? found.new : "Item " + itemId;
}

function renderDrops(dropTableId) {

    if (!DATA["EnemySpawn.json"]) return "";

    const dropTables = DATA["EnemySpawn.json"].dropsTables;
    const table = dropTables.find(t => t.id === dropTableId);

    if (!table) {
        return `<div style="opacity:0.6;">No Drop Data</div>`;
    }

    let html = `<div style="margin-top:8px;">`;

    table.items.forEach(item => {

        const itemId = item[0];
        const min = item[1];
        const max = item[2];
        const chance = Math.round(item[5] * 100);

        const itemName = getItemName(itemId);

        html += `
            <div class="drop-item">
                <a href="#" class="link"
                   onclick="navigate('?item=${itemId}'); return false;">
                    ${itemName}
                </a>
                (${min}${max > 1 ? "-" + max : ""})
                - ${chance}%
            </div>
        `;
    });

    html += `</div>`;

    return html;
}
