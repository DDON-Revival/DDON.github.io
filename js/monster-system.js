const content = document.getElementById("content");

/* =============================
   HELPERS
============================= */

function getEnemyName(id){
    return DATA["enemy-names.json"]?.[id] || id;
}

/* =============================
   MONSTER LIST
============================= */

function renderMonsterList(){

    const enemies = DATA["EnemySpawn.json"]?.enemies;
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
                <a href="#" class="link"
                   onclick="navigate('?monster=${enemyId}'); return false;">
                    ${getEnemyName(enemyId)}
                </a>
            </h2>
        `;

        content.appendChild(card);
    });
}

/* =============================
   SINGLE MONSTER
============================= */

function openMonster(enemyId){

    const enemies = DATA["EnemySpawn.json"]?.enemies;
    if (!enemies) return;

    const filtered = enemies.filter(e => String(e[5]) === String(enemyId));
    if (!filtered.length) return;

    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    const dropTableId = filtered[0][27];

    card.innerHTML = `
        <h2>${getEnemyName(enemyId)}</h2>
        <h3>Drops</h3>
        ${renderDrops(dropTableId)}
        <br><br>
        <a href="#" class="link"
           onclick="navigate('?'); return false;">
           ← Back
        </a>
    `;

    content.appendChild(card);
}
