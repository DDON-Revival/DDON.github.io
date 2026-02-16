function renderDrops(dropTableId) {

    if (!DATA["EnemySpawn.json"]) return "";

    const dropTables = DATA["EnemySpawn.json"].dropsTables;
    const table = dropTables.find(t => t.id === dropTableId);

    if (!table) {
        return `<div class="drop-item">No Drop Data</div>`;
    }

    let html = `<div style="margin-top:8px;">`;

    table.items.forEach(item => {

        const itemId = item[0];
        const min = item[1];
        const max = item[2];
        const chance = Math.round(item[5] * 100);
        const name = getItemName(itemId);

        html += `
            <a href="#" class="drop-item"
               onclick="openItem('${itemId}'); return false;">
                ${name} (${min}${max > 1 ? "-" + max : ""})
                - ${chance}%
            </a>
        `;
    });

    html += `</div>`;

    return html;
}
