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

    const monsterMap = new Map();

    enemies.forEach(e => {
        const stageId = e[0];
        const enemyId = e[5];
        const level = e[9];

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
                <div style="margin-bottom:6px;">
                    ${stageName} (Lv ${levelList})
                </div>
            `;
        });

        card.innerHTML = html;
        content.appendChild(card);
    });
}

/* ---- Warten bis Daten geladen sind ---- */

const waitForData = setInterval(() => {
    if (window.dataLoaded) {
        clearInterval(waitForData);
        renderMonsterList();
    }
}, 100);

/* ---- Search ---- */

searchInput.addEventListener("input", (e) => {
    renderMonsterList(e.target.value);
});
