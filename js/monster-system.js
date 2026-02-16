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

    if (!DATA["EnemySpawn.json"]) return;

    content.innerHTML = "";

    const enemies = DATA["EnemySpawn.json"].enemies;

    const uniqueEnemies = new Map();

    enemies.forEach(e => {
        const enemyId = e[5];
        const stageId = e[0];
        const level = e[9];

        if (!uniqueEnemies.has(enemyId)) {
            uniqueEnemies.set(enemyId, new Map());
        }

        const stageMap = uniqueEnemies.get(enemyId);
        const key = stageId + "-" + level;

        stageMap.set(key, { stageId, level });
    });

    uniqueEnemies.forEach((stageMap, enemyId) => {

        const name = getEnemyName(enemyId);
        if (!name.toLowerCase().includes(filter.toLowerCase())) return;

        const card = document.createElement("div");
        card.className = "card";

        let html = `
            <h2>${name}</h2>
            <p><strong>ID:</strong> ${enemyId}</p>
            <h3>Spawn Locations</h3>
        `;

        stageMap.forEach(spawn => {
            html += `
                <div>
                    ${getStageName(spawn.stageId)} (Lv ${spawn.level})
                </div>
            `;
        });

        card.innerHTML = html;
        content.appendChild(card);
    });
}

/* 🔥 WICHTIG: Erst rendern wenn Daten geladen sind */
searchInput.addEventListener("input", (e) => {
    renderMonsterList(e.target.value);
});

setTimeout(() => {
    renderMonsterList();
}, 800);
