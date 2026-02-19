const content = document.getElementById("content");

function renderMonsterList(){

    const enemies = DATA["EnemySpawn.json"]?.enemies;
    if (!enemies) return;

    content.innerHTML = "";

    const unique = [...new Set(enemies.map(e=>e[5]))];

    unique.sort((a,b)=>getEnemyName(a).localeCompare(getEnemyName(b)));

    unique.forEach(enemyId=>{

        const card = document.createElement("div");
        card.className="card";

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

    const enemies = DATA["EnemySpawn.json"]?.enemies;
    if (!enemies) return;

    const filtered = enemies.filter(e => String(e[5]) === String(enemyId));
    if (!filtered.length) return;

    content.innerHTML="";

    const stageMap = new Map();

    filtered.forEach(e=>{
        const stageId = e[0];
        const level = e[9];
        const dropId = e[27];

        if (!stageMap.has(stageId)){
            stageMap.set(stageId,{
                levels:new Set(),
                dropId:dropId
            });
        }

        stageMap.get(stageId).levels.add(level);
    });

    const card=document.createElement("div");
    card.className="card";

    let html=`<h2>${getEnemyName(enemyId)}</h2>`;

    stageMap.forEach((data,stageId)=>{

        const levels=[...data.levels].sort((a,b)=>a-b);
        const min=levels[0];
        const max=levels[levels.length-1];

        html+=`
            <h3>${getStageName(stageId)} (Lv ${min}${min!=max?'-'+max:''})</h3>
            ${renderDrops(data.dropId)}
        `;
    });

    html+=`<br><button onclick="navigate('?')">← Back</button>`;

    card.innerHTML=html;
    content.appendChild(card);
}
