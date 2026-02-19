function renderStageList(){

    const stages = DATA["stage-names.json"];
    if (!stages) return;

    content.innerHTML="";

    Object.keys(stages).forEach(id=>{

        const card=document.createElement("div");
        card.className="card";

        card.innerHTML=`
            <h2>
                <a href="#" onclick="navigate('?stage=${id}')">
                    ${stages[id].en}
                </a>
            </h2>
        `;

        content.appendChild(card);
    });
}

function openStage(stageId){

    const enemies = DATA["EnemySpawn.json"]?.enemies;
    if (!enemies) return;

    content.innerHTML="";

    const stageEnemies = enemies.filter(e=>String(e[0])===String(stageId));

    const map=new Map();

    stageEnemies.forEach(e=>{
        const enemyId=e[5];
        const level=e[9];
        const dropId=e[27];

        if(!map.has(enemyId)){
            map.set(enemyId,{
                levels:new Set(),
                dropId:dropId
            });
        }

        map.get(enemyId).levels.add(level);
    });

    const card=document.createElement("div");
    card.className="card";

    let html=`<h2>${getStageName(stageId)}</h2>`;

    map.forEach((data,enemyId)=>{

        const levels=[...data.levels].sort((a,b)=>a-b);
        const min=levels[0];
        const max=levels[levels.length-1];

        html+=`
            <h3>${getEnemyName(enemyId)} (Lv ${min}${min!=max?'-'+max:''})</h3>
            ${renderDrops(data.dropId)}
        `;
    });

    html+=`<br><button onclick="navigate('?stages')">← Back</button>`;

    card.innerHTML=html;
    content.appendChild(card);
}
