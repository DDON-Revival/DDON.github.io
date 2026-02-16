function openStage(stageId) {

    const content = document.getElementById("results");
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

    monsterMap.forEach((levels, enemyId) => {

        const name = getEnemyName(enemyId);
        const sorted = [...levels].sort((a,b)=>a-b);

        const minLv = sorted[0];
        const maxLv = sorted[sorted.length-1];

        const levelDisplay = minLv === maxLv
            ? `Lv ${minLv}`
            : `Lv ${minLv}-${maxLv}`;

        html += `
            <div style="margin-bottom:6px;">
                ${name} (${levelDisplay})
            </div>
        `;
    });

    card.innerHTML = html;
    content.appendChild(card);
}
