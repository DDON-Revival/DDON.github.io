const searchInput = document.getElementById("searchBox");
const content = document.getElementById("content");

function getEnemyName(enemyId) {
    return DATA["enemy-names.json"][enemyId] || enemyId;
}

function getStageName(stageId) {
    const stage = DATA["stage-names.json"][stageId];
    return stage ? stage.en : stageId;
}

function renderMonsterList(filter = "") {
    content.innerHTML = "";

    const enemies = DATA["EnemySpawn.json"].enemies;
    const uniqueEnemies = new Map();

    // Gruppiere nach EnemyId
    enemies.forEach(e => {
        const enemyId = e[5];
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

        // Gruppiere Spawn nach Stage + Level
        const stageMap = new Map();

        spawns.forEach(spawn => {
            const stageId = spawn[0];
            const level = spawn[9];

            if (!stageMap.has(stageId)) {
                stageMap.set(stageId, new Set());
            }

            stageMap.get(stageId).add(level);
        });

        let html = `
            <h2>${name}</h2>
            <p><strong>ID:</strong> ${enemyId}</p>
            <h3>Spawn Locations</h3>
        `;

        stageMap.forEach((levels, stageId) => {
            const stageName = getStageName(stageId);
            const levelList = [...levels].sort((a,b)=>a-b).join(", ");

            html += `
                <div style="margin-bottom:8px;">
                    ${stageName} (Lv ${levelList})
                </div>
            `;
        });

        card.innerHTML = html;
        content.appendChild(card);
    });
}