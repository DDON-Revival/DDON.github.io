function openStage(stageId) {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const enemies = DATA["EnemySpawn.json"].enemies;
    const stageName = getStageName(stageId);

    const card = document.createElement("div");
    card.className = "card";

    let html = `
        <h2>${stageName}</h2>
        <h3>Monsters</h3>
    `;

    const monsterMap = new Map();

    /* -------- Build Monster Data for this Stage -------- */

    enemies.forEach(e => {

        if (String(e[0]) !== String(stageId)) return;

        const enemyId = e[5];
        const level = e[9];
        const dropTableId = e[27];

        if (!monsterMap.has(enemyId)) {
            monsterMap.set(enemyId, {
                levels: new Set(),
                dropTableId: dropTableId
            });
        }

        monsterMap.get(enemyId).levels.add(level);
    });

    /* -------- Sort Monsters Alphabetically -------- */

    const sortedMonsters = [...monsterMap.entries()].sort((a,b) => {
        return getEnemyName(a[0]).localeCompare(getEnemyName(b[0]));
    });

    /* -------- Render -------- */

    sortedMonsters.forEach(([enemyId, data]) => {

        const name = getEnemyName(enemyId);
        const sortedLevels = [...data.levels].sort((a,b)=>a-b);

        const minLv = sortedLevels[0];
        const maxLv = sortedLevels[sortedLevels.length - 1];

        const levelDisplay = minLv === maxLv
            ? `Lv ${minLv}`
            : `Lv ${minLv}-${maxLv}`;

        html += `
            <div style="margin-bottom:15px;">
                <strong>${name}</strong> (${levelDisplay})
                ${renderDrops(data.dropTableId)}
            </div>
        `;
    });

    /* -------- Back Button -------- */

    html += `
        <div style="margin-top:25px;">
            <button onclick="navigate('?')" 
                style="padding:8px 14px; background:#facc15; border:none; border-radius:6px; cursor:pointer;">
                ← Back to Monsters
            </button>
        </div>
    `;

    card.innerHTML = html;
    content.appendChild(card);
}
