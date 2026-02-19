function getEnemyName(id){
    return DATA["enemy-names.json"]?.[id] || id;
}

function renderMonsterList(filter=""){

    const enemies = DATA["EnemySpawn.json"]?.enemies;
    if (!enemies) return;

    content.innerHTML = "";

    const unique = new Set();

    enemies.forEach(e => unique.add(e[5]));

    [...unique].forEach(enemyId => {

        const name = getEnemyName(enemyId);

        if (!name.toLowerCase().includes(filter)) return;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>${name}</h2>
            <button onclick="openMonster('${enemyId}')">Open</button>
        `;

        content.appendChild(card);
    });
}

function openMonster(enemyId){

    const enemies = DATA["EnemySpawn.json"].enemies;
    const filtered = enemies.filter(e => String(e[5]) === String(enemyId));

    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${getEnemyName(enemyId)}</h2>
        <h3>Drops</h3>
        ${renderDrops(filtered[0][27])}
        <br><br>
        <button onclick="renderHome()">← Back</button>
    `;

    content.appendChild(card);
}
