const content = document.getElementById("content");

function getEnemyName(id){
    return DATA.Enemies?.[id] || id;
}

function renderMonsterList(){

    const enemies = DATA.EnemySpawn?.enemies;
    if (!enemies) return;

    content.innerHTML = "";

    const unique = new Set();
    enemies.forEach(e => unique.add(e[5]));

    [...unique].sort((a,b)=>getEnemyName(a).localeCompare(getEnemyName(b)))
    .forEach(enemyId => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>
                <a href="#" onclick="navigate('?monster=${enemyId}')">
                    ${getEnemyName(enemyId)}
                </a>
            </h2>
        `;

        content.appendChild(card);
    });
}

function openMonster(enemyId){

    const enemies = DATA.EnemySpawn?.enemies;
    if (!enemies) return;

    const filtered = enemies.filter(e => String(e[5]) === String(enemyId));
    if (!filtered.length) return;

    content.innerHTML = "";

    const dropTableId = filtered[0][27];

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${getEnemyName(enemyId)}</h2>
        <h3>Drops</h3>
        ${renderDrops(dropTableId)}
        <br><br>
        <a href="#" onclick="navigate('?')">← Back</a>
    `;

    content.appendChild(card);
}
