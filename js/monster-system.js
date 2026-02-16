window.initWiki = function () {

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

    if (!window.dataLoaded) {
        setTimeout(() => renderMonsterList(filter), 100);
        return;
    }

    content.innerHTML = "";

    const spawnData = DATA["EnemySpawn.json"];
    const enemies = spawnData.enemies || spawnData.data?.enemies || [];

    const uniqueEnemies = new Map();

    enemies.forEach(e => {
        const stageId = e[0];
        const enemyId = e[5];
        const level = e[9];

        if (!uniqueEnemies.has(enemyId)) {
            uniqueEnemies.set(enemyId, new Set());
        }

        uniqueEnemies.get(enemyId).add(`${stageId}|${level}`);
    });

    uniqueEnemies.forEach((spawnSet, enemyId) => {

        const name = getEnemyName(enemyId);
        if (!name.toLowerCase().includes(filter.toLowerCase())) return;

        const card = document.createElement("div");
        card.className = "card";

        let html = `
            <h2>${name}</h2>
            <p><strong>ID:</strong> ${enemyId}</p>
            <h3>Spawn Locations:</h3>
        `;

        spawnSet.forEach(entry => {
            const [stageId, level] = entry.split("|");
            const stageName = getStageName(stageId);

            html += `
                <div>
                    ${stageName} (Lv ${level})
                </div>
            `;
        });

        card.innerHTML = html;
        content.appendChild(card);
    });
}