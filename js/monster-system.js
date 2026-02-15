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

        let html = `
            <h2>${name}</h2>
            <p><strong>ID:</strong> ${enemyId}</p>
            <h3>Spawn Locations:</h3>
        `;

        spawns.forEach(spawn => {
            const stageId = spawn[0];
            const level = spawn[9];
            const stageName = getStageName(stageId);

            html += `
                <div style="margin-bottom:8px;">
                    ${stageName} (Lv ${level})
                </div>
            `;
        });

        card.innerHTML = html;
        content.appendChild(card);
    });
}

searchInput.addEventListener("input", (e) => {
    renderMonsterList(e.target.value);
});

renderMonsterList();
