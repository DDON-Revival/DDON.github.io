const searchInput = document.getElementById("searchBox");
const content = document.getElementById("content");

/* ---------------- HELPERS ---------------- */

function getEnemyName(enemyId) {
    return DATA["enemy-names.json"]?.[enemyId] || enemyId;
}

function getStageName(stageId) {
    const stage = DATA["stage-names.json"]?.[stageId];
    return stage ? stage.en : stageId;
}

function getItemName(itemId) {
    return DATA["item-names.json"]?.[itemId] || `Item ${itemId}`;
}

/* ---------------- MONSTER LIST ---------------- */

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
            .sort((a,b) => getStageName(a[0]).localeCompare(getStageName(b[0])));

        sortedStages.forEach(([stageId, levels]) => {

            const stageName = getStageName(stageId);
            const sortedLevels = [...levels].sort((a,b)=>a-b);

            const minLv = sortedLevels[0];
            const maxLv = sortedLevels[sortedLevels.length - 1];

            const levelDisplay = minLv === maxLv
                ? `Lv ${minLv}`
                : `Lv ${minLv} - ${maxLv}`;

            html += `
                <a href="#" class="stage-link"
                   onclick="openStage('${stageId}'); return false;">
                    ${stageName} (${levelDisplay})
                </a>
            `;
        });

        html += `<h3>Drops</h3>`;
        html += renderDrops(monsterData.dropTableId);

        card.innerHTML = html;
        content.appendChild(card);
    });
}

/* ---------------- WAIT FOR DATA ---------------- */

const waitForData = setInterval(() => {
    if (window.dataLoaded) {
        clearInterval(waitForData);
        renderMonsterList();
    }
}, 100);

/* ---------------- SMART SEARCH ---------------- */

searchInput.addEventListener("input", (e) => {

    const value = e.target.value.toLowerCase();

    if (!value) {
        renderMonsterList();
        return;
    }

    /* ITEM SEARCH */
    const items = DATA["item-names.json"];
    for (const id in items) {
        if (items[id].toLowerCase().includes(value)) {
            openItem(id);
            return;
        }
    }

    /* STAGE SEARCH */
    const stages = DATA["stage-names.json"];
    for (const id in stages) {
        if (stages[id].en.toLowerCase().includes(value)) {
            openStage(id);
            return;
        }
    }

    /* MONSTER SEARCH */
    renderMonsterList(value);
});
