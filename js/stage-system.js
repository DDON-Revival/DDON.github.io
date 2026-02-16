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

    enemies.forEach(e => {

        if (e[0] != stageId) return;

        const enemyId = e[5];
        const level = e[9];

        if (!monsterMap.has(enemyId)) {
            monsterMap.set(enemyId, new Set());
        }

        monsterMap.get(enemyId).add(level);
    });

    /* Sort monsters alphabetically */
    const sortedMonsters = [...monsterMap.entries()].sort((a,b) => {
        return getEnemyName(a[0]).localeCompare(getEnemyName(b[0]));
    });

    sortedMonsters.forEach(([enemyId, levels]) => {

        const name = getEnemyName(enemyId);
        const sortedLevels = [...levels].sort((a,b)=>a-b);

        const minLv = sortedLevels[0];
        const maxLv = sortedLevels[sortedLevels.length-1];

        const levelDisplay = minLv === maxLv
            ? `Lv ${minLv}`
            : `Lv ${minLv}-${maxLv}`;

        html += `
            <div style="margin-bottom:6px;">
                ${name} (${levelDisplay})
            </div>
        `;
    });

    html += `
        <div style="margin-top:20px;">
            <button onclick="renderMonsterList()" 
                style="padding:8px 14px; background:#facc15; border:none; border-radius:6px; cursor:pointer;">
                ← Back to Monsters
            </button>
        </div>
    `;

    card.innerHTML = html;
    content.appendChild(card);
}
