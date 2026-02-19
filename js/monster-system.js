const content = document.getElementById("content");

/* HELPERS */

function getEnemyName(enemyId){
    return DATA["enemy-names.json"]?.[enemyId] || enemyId;
}

function getStageName(stageId){
    const stage = DATA["stage-names.json"]?.[stageId];
    return stage ? stage.en : stageId;
}

/* MONSTER LIST */

function renderMonsterList(filter=""){

    if (!DATA["EnemySpawn.json"]) return;

    content.innerHTML = "";

    const enemies = DATA["EnemySpawn.json"].enemies;
    const monsterMap = new Map();

    enemies.forEach(e => {

        const stageId = e[0];
        const enemyId = e[5];
        const level = e[9];
        const dropTableId = e[27];

        if (!monsterMap.has(enemyId)){
            monsterMap.set(enemyId,{
                stages:new Map(),
                dropTableId:dropTableId
            });
        }

        const data = monsterMap.get(enemyId);

        if (!data.stages.has(stageId)){
            data.stages.set(stageId,new Set());
        }

        data.stages.get(stageId).add(level);
    });

    monsterMap.forEach((monsterData,enemyId)=>{

        const name=getEnemyName(enemyId);

        if (!name.toLowerCase().includes(filter.toLowerCase())) return;

        const card=document.createElement("div");
        card.className="card";

        let html=`
            <h2>
                <a href="#" class="link"
                   onclick="navigate('?monster=${enemyId}'); return false;">
                   ${name}
                </a>
            </h2>
            <h3>Drops</h3>
            ${renderDrops(monsterData.dropTableId)}
        `;

        card.innerHTML=html;
        content.appendChild(card);
    });
}
