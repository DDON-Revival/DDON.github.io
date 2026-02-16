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

    // 🔹 Alle Spawns pro Enemy sammeln
    enemies.forEach(e => {
        const enemyId = e[5];
        if (!uniqueEnemies.has(enemyId)) {
            uniqueEnemies.set(enemyId, []);
        }
        uniqueEnemies.get(enemyId).push(e);
    });

    // 🔹 Für jeden Monster-Typ
    uniqueEnemies.forEach((spawns, enemyId) => {

        const name = getEnemyName(enemyId);
        if (!name.toLowerCase().includes(filter.toLowerCase())) return;

        const card = document.createElement("div");
        card.className = "card";

        // 🔹 Stage + Level gruppieren
        const spawnMap = new Map();

        spawns.forEach(spawn => {
            const stageId = spawn[0];
            const level = spawn[9];

            const key = stageId + "_" + level;

            if (!spawnMap.has(key)) {
                spawnMap.set(key, {
                    stageId,
                    level,
                    count: 0
                });
            }

            spawnMap.get(key).count++;
        });

        // 🔹 Sortieren nach Level
        const sortedSpawns = Array.from(spawnMap.values())
            .sort((a, b) => a.level - b.level);

        let html = `
            <h2>${name}</h2>
            <p><strong>ID:</strong> ${enemyId}</p>
            <h3>Spawn Locations:</h3>
        `;

        sortedSpawns.forEach(s => {
            const stageName = getStageName(s.stageId);

            html += `
                <div>
                    ${stageName} (Lv ${s.level}) — ${s.count}x
                </div>
            `;
        });

        card.innerHTML = html;
        content.appendChild(card);
    });
}