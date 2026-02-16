const searchInput = document.getElementById("searchBox");
const content = document.getElementById("content");

function getEnemyName(enemyId) {
    return DATA["enemy-names.json"]?.[enemyId] || enemyId;
}

function getStageName(stageId) {
    const stage = DATA["stage-names.json"]?.[stageId];
    return stage?.en || stageId;
}

function getEnemiesArray() {
    const file = DATA["EnemySpawn.json"];

    if (!file) return [];

    // Prüfe mögliche Strukturen
    if (file.enemies) return file.enemies;
    if (file.data?.enemies) return file.data.enemies;

    console.error("Enemies array not found in EnemySpawn.json");
    return [];
}

function renderMonsterList(filter = "") {

    const enemies = getEnemiesArray();
    content.innerHTML = "";

    if (!enemies.length) {
        content.innerHTML = "<p>No enemy data found.</p>";
        return;
    }

    const monsterMap = new Map();

    enemies.forEach(spawn => {
        const enemyId = spawn[5]; // EnemyId
        const stageId = spawn[0]; // StageId
        const level = spawn[9];   // Lv

        if (!monsterMap.has(enemyId)) {
            monsterMap.set(enemyId, new Map());
        }

        const stageMap = monsterMap.get(enemyId);

        if (!stageMap.has(stageId)) {
            stageMap.set(stageId, new Set());
        }

        stageMap.get(stageId).add(level);
    });

    monsterMap.forEach((stageMap, enemyId) => {

        const name = getEnemyName(enemyId);

        if (!name.toLowerCase().includes(filter.toLowerCase())) return;

        const card = document.createElement("div");
        card.className = "card";

        let html = `
            <h2>${name}</h2>
            <p><strong>ID:</strong> ${enemyId}</p>
            <h3>Spawn Locations</h3>
        `;

        stageMap.forEach((levels, stageId) => {
            const stageName = getStageName(stageId);
            const levelList = [...levels].sort((a,b)=>a-b).join(", ");

            html += `
                <div>
                    ${stageName} (Lv ${levelList})
                </div>
            `;
        });

        card.innerHTML = html;
        content.appendChild(card);
    });
}

const waitForData = setInterval(() => {
    if (window.dataLoaded) {
        clearInterval(waitForData);
        renderMonsterList();
    }
}, 100);
