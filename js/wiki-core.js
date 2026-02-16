const searchInput = document.getElementById("searchBox");
const content = document.getElementById("content");

/* ---------- Helpers ---------- */

function getEnemyName(enemyId) {
    return DATA["enemy-names.json"][enemyId] || enemyId;
}

function getStageName(stageId) {
    const stage = DATA["stage-names.json"][stageId];
    return stage ? stage.en : stageId;
}

function getDropTableById(id) {
    return DATA["EnemySpawn.json"].dropsTables.find(d => d.id == id);
}

/* ---------- Drop Renderer ---------- */

function renderDrops(dropTableId) {

    if (!dropTableId) return "<div>No drops</div>";

    const table = getDropTableById(dropTableId);
    if (!table) return "<div>No drops</div>";

    let html = `<div style="margin-top:10px;">`;

    table.items.forEach(item => {

        const itemId = item[0];
        const dropChance = Math.round(item[5] * 100);

        html += `
            <div style="margin-left:10px;">
                Item ID: ${itemId} — ${dropChance}%
            </div>
        `;
    });

    html += `</div>`;

    return html;
}

/* ---------- Monster Renderer ---------- */

function renderMonsterList(filter = "") {

    if (!DATA["EnemySpawn.json"]) return;

    content.innerHTML = "";

    const enemies = DATA["EnemySpawn.json"].enemies;
    const monsterMap = new Map();

    enemies.forEach(e => {

        const stageId = e[0];
        const enemyId = e[5];
        const level = e[9];
        const dropTableId = e[27];

        if (!monsterMap.has(enemyId)) {
            monsterMap.set(enemyId, {
                stages: new Map(),
                dropTableId: dropTableId
            });
        }

        const monsterData = monsterMap.get(enemyId);

        if (!monsterData.stages.has(stageId)) {
            monsterData.stages.set(stageId, new Set());
        }

        monsterData.stages.get(stageId).add(level);
    });

    monsterMap.forEach((monsterData, enemyId) => {

        const name = getEnemyName(enemyId);

        if (!name.toLowerCase().includes(filter.toLowerCase())) return;

        const card = document.createElement("div");
        card.className = "card";

        let html = `
            <h2>${name}</h2>
            <p><strong>ID:</strong> ${enemyId}</p>
            <h3>Spawn Locations</h3>
        `;

        const sortedStages = [...monsterData.stages.entries()]
            .sort((a,b)=> getStageName(a[0]).localeCompare(getStageName(b[0])));

        sortedStages.forEach(([stageId, levels]) => {

            const stageName = getStageName(stageId);
            const sortedLevels = [...levels].sort((a,b)=>a-b);

            const minLv = sortedLevels[0];
            const maxLv = sortedLevels[sortedLevels.length-1];

            const levelDisplay = minLv === maxLv
                ? `Lv ${minLv}`
                : `Lv ${minLv} - ${maxLv}`;

            html += `<div>${stageName} (${levelDisplay})</div>`;
        });

        html += `<h3>Drops</h3>`;
        html += renderDrops(monsterData.dropTableId);

        card.innerHTML = html;
        content.appendChild(card);
    });
}

/* ---------- Wait for Data ---------- */

const waitForData = setInterval(() => {
    if (window.dataLoaded) {
        clearInterval(waitForData);
        renderMonsterList();
    }
}, 100);

/* ---------- Search ---------- */

searchInput.addEventListener("input", e => {
    renderMonsterList(e.target.value);
});
