const searchInput = document.getElementById("searchBox");
const content = document.getElementById("content");

function getEnemyName(enemyId) {
    return DATA["enemy-names.json"][enemyId] || enemyId;
}

function getStageName(stageId) {
    const stage = DATA["stage-names.json"][stageId];
    return stage ? stage.en : stageId;
}

function getDropTable(tableId) {
    return DATA["EnemySpawn.json"].dropsTables.find(d => d.id === tableId);
}

function renderMonsterList(filter = "") {

    content.innerHTML = "";

    const enemies = DATA["EnemySpawn.json"].enemies;

    const grouped = new Map();

    enemies.forEach(e => {
        const enemyId = e[5];

        if (!grouped.has(enemyId)) {
            grouped.set(enemyId, []);
        }

        grouped.get(enemyId).push(e);
    });

    grouped.forEach((spawns, enemyId) => {

        const name = getEnemyName(enemyId);

        if (!name.toLowerCase().includes(filter.toLowerCase())) return;

        const card = document.createElement("div");
        card.className = "card";

        // LEVEL RANGE
        const levels = spawns.map(s => s[9]);
        const minLv = Math.min(...levels);
        const maxLv = Math.max(...levels);

        // GROUP BY STAGE
        const stageMap = new Map();

        spawns.forEach(s => {
            const stageId = s[0];
            const level = s[9];
            const dropId = s[27];

            if (!stageMap.has(stageId)) {
                stageMap.set(stageId, {
                    levels: [],
                    dropIds: new Set()
                });
            }

            stageMap.get(stageId).levels.push(level);
            stageMap.get(stageId).dropIds.add(dropId);
        });

        let html = `
            <h2>${name}</h2>
            <p><strong>ID:</strong> ${enemyId}</p>
            <p><strong>Level Range:</strong> ${minLv} - ${maxLv}</p>
            <h3>Spawn Locations</h3>
        `;

        stageMap.forEach((data, stageId) => {

            const stageName = getStageName(stageId);
            const stageMin = Math.min(...data.levels);
            const stageMax = Math.max(...data.levels);

            html += `
                <div style="margin-bottom:15px;">
                    <strong>${stageName}</strong>
                    <div>Level: ${stageMin} - ${stageMax}</div>
                </div>
            `;

            // DROPS
            data.dropIds.forEach(dropId => {

                const dropTable = getDropTable(dropId);
                if (!dropTable) return;

                html += `<div style="margin-left:20px;"><strong>Drops:</strong><ul>`;

                dropTable.items.forEach(item => {
                    const itemId = item[0];
                    const dropChance = item[5] * 100;

                    html += `
                        <li>
                            Item ID: ${itemId} — ${dropChance.toFixed(1)}%
                        </li>
                    `;
                });

                html += `</ul></div>`;
            });

        });

        card.innerHTML = html;
        content.appendChild(card);
    });
}

searchInput.addEventListener("input", e => {
    renderMonsterList(e.target.value);
});

renderMonsterList();
