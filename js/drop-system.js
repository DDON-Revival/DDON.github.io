function renderDrops(dropTableId) {

    if (!DATA["EnemySpawn.json"]) return "";

    const dropTables = DATA["EnemySpawn.json"].dropsTables;

    const table = dropTables.find(t => t.id === dropTableId);

    if (!table) {
        return `<div class="drop-item" style="opacity:0.5;">No Drop Data</div>`;
    }

    let html = "";

    table.items.forEach(item => {

        const itemId = item[0];
        const min = item[1];
        const max = item[2];
        const chance = Math.round(item[5] * 100);

        html += `
            <div class="drop-item">
                Item ${itemId}
                (${min}${max > 1 ? "-" + max : ""})
                — ${chance}%
            </div>
        `;
    });

    return html;
}
