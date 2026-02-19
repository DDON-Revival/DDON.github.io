function getStageName(id){
    return DATA["stage-names.json"]?.[id]?.en || id;
}

function openStage(stageId){

    const enemies = DATA["EnemySpawn.json"].enemies;

    content.innerHTML="";

    const card=document.createElement("div");
    card.className="card";

    let html=`<h2>${getStageName(stageId)}</h2><h3>Monsters</h3>`;

    enemies.filter(e=>String(e[0])===String(stageId))
    .forEach(e=>{
        html+=`
            <div>
                <a href="#" onclick="navigate('?monster=${e[5]}'); return false;">
                    ${getEnemyName(e[5])}
                </a>
            </div>
        `;
    });

    html+=`<br><a href="#" onclick="navigate('?'); return false;">← Back</a>`;

    card.innerHTML=html;
    content.appendChild(card);
}
