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
    const uniqueEnemies = new Map();

    enemies.forEach(e => {
        const enemyId = e[5]; // EnemyId
        if (!uniqueEnemies.has(enemyId)) {
            uniqueEnemies.set(enemyId, []);
        }
        uniqueEnemies.get(enemyId).push(e);
    });

    uniqueEnemies.forEach((spawns, enemyId) => {
        const name = getEnemyName(enemyId);
        if (!name.toLowerCase().includes(filter.toLowerCase())) return;

        const card = document.createElement("div");
        card.className = "card";

        // 🔥 DUPLICATE CLEANER
        const uniqueSpawns = new Set();

        spawns.forEach(spawn => {
            const stageId = spawn[0];
            const level = spawn[9];

            const stageName = getStageName(stageId);

            uniqueSpawns.add(`${stageName} (Lv ${level})`);
        });

        // optional sort
        const sortedSpawns = Array.from(uniqueSpawns).sort();

        let html = `
            <h2>${name}</h2>
            <p><strong>ID:</strong> ${enemyId}</p>
            <h3>Spawn Locations</h3>
        `;

        sortedSpawns.forEach(entry => {
            html += `<div>${entry}</div>`;
        });

        card.innerHTML = html;
        content.appendChild(card);
    });
}