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

    /* -------- Build clean structure -------- */

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

    /* -------- Render -------- */

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

        /* Sort stages alphabetically */
        const sortedStages = [...stageMap.entries()].sort((a,b) => {
            const nameA = getStageName(a[0]);
            const nameB = getStageName(b[0]);
            return nameA.localeCompare(nameB);
        });

        sortedStages.forEach(([stageId, levels]) => {

            const stageName = getStageName(stageId);

            const sortedLevels = [...levels].sort((a,b)=>a-b);

            /* Convert levels to range */
            const minLv = sortedLevels[0];
            const maxLv = sortedLevels[sortedLevels.length - 1];

            let levelDisplay;

            if (minLv === maxLv) {
                levelDisplay = `Lv ${minLv}`;
            } else {
                levelDisplay = `Lv ${minLv} - ${maxLv}`;
            }

            html += `
                <div style="margin-bottom:6px;">
                    ${stageName} (${levelDisplay})
                </div>
            `;
        });

        card.innerHTML = html;
        content.appendChild(card);
    });
}