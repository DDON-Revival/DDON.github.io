const searchInput = document.getElementById("searchBox");
const content = document.getElementById("content");

function getEnemyName(enemyId) {
    return DATA["enemy-names.json"][enemyId] || enemyId;
}

function getStageName(stageId) {
    const stage = DATA["stage-names.json"][stageId];
    return stage ? stage.en : stageId;
}

function renderSingleMonster(enemyId) {

    const enemies = DATA["EnemySpawn.json"].enemies;
    const content = document.getElementById("content");
    content.innerHTML = "";

    const filtered = enemies.filter(e => String(e[5]) === String(enemyId));
    if (!filtered.length) return;

    const card = document.createElement("div");
    card.className = "card";

    const name = getEnemyName(enemyId);

    let html = `
        <h2>${name}</h2>
        <p><strong>ID:</strong> ${enemyId}</p>
        <h3>Spawn Locations</h3>
    `;

    const stageMap = new Map();

    filtered.forEach(e => {
        const stageId = e[0];
        const level = e[9];

        if (!stageMap.has(stageId)) stageMap.set(stageId, new Set());
        stageMap.get(stageId).add(level);
    });

    stageMap.forEach((levels, stageId) => {

        const sorted = [...levels].sort((a,b)=>a-b);
        const min = sorted[0];
        const max = sorted[sorted.length-1];

        const levelDisplay = min === max ? `Lv ${min}` : `Lv ${min}-${max}`;

        html += `
            <a href="#" class="link"
               onclick="navigate('?stage=${stageId}'); return false;">
                ${getStageName(stageId)} (${levelDisplay})
            </a>
        `;
    });

    html += `<h3>Drops</h3>`;
    html += renderDrops(filtered[0][27]);

    html += `
        <br><br>
        <a href="#" class="link"
           onclick="navigate('?'); return false;">
            ← Back to Monsters
        </a>
    `;

    card.innerHTML = html;
    content.appendChild(card);
}

function renderMonsterList(filter = "", singleMonsterId = null) {

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

        if (singleMonsterId && enemyId != singleMonsterId) return;

        const name = getEnemyName(enemyId);
        if (!singleMonsterId && !name.toLowerCase().includes(filter.toLowerCase())) return;

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
                <a href="?stage=${stageId}" class="link"
                   onclick="navigate('?stage=${stageId}'); return false;">
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
        router(); // WICHTIG
    }
}, 100);

/* Search */
searchInput.addEventListener("input", (e) => {

    const value = e.target.value.toLowerCase();
    if (!value) {
        navigate("?");
        return;
    }

    const itemData = DATA["item_names.json"];
    const stageData = DATA["stage-names.json"];

    if (itemData && itemData.item) {
        for (const item of itemData.item) {
            if (!item.new) continue;

            if (item.new.toLowerCase().includes(value)) {
                navigate(`?item=${item.id}`);
                return;
            }
        }
    }

    for (const id in stageData) {
        if (stageData[id].en.toLowerCase().includes(value)) {
            navigate(`?stage=${id}`);
            return;
        }
    }

    renderMonsterList(value);
});
