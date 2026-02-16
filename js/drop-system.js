function getItemName(itemId) {
    if (!DATA["item_names.json"]) return "Item " + itemId;
    return DATA["item_names.json"][itemId] || "Item " + itemId;
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
                <a href="#" class="link" onclick="openItem('${itemId}')">
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
