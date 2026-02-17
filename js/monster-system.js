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
                <a href="#" class="link" onclick="openStage('${stageId}')">
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


/* Wait for loader */
const waitForData = setInterval(() => {
    if (window.dataLoaded) {
        clearInterval(waitForData);
        renderMonsterList();
    }
}, 100);

/* Search */
searchInput.addEventListener("input", (e) => {

    const value = e.target.value.toLowerCase();

    if (!value) {
        renderMonsterList();
        return;
    }

const itemData = DATA["item_names.json"];
const stageData = DATA["stage-names.json"];

if (itemData && itemData.item) {
    for (const item of itemData.item) {

        if (!item.new) continue;

        if (item.new.toLowerCase().includes(value)) {
            openItem(item.id);
            return;
        }
    }
}

for (const id in stageData) {
    if (stageData[id].en.toLowerCase().includes(value)) {
        openStage(id);
        return;
    }
}

renderMonsterList(value);
});
