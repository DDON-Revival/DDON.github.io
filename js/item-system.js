function openItem(itemId){

    content.innerHTML="";

    const card=document.createElement("div");
    card.className="card";

    let html=`
        <h2>${getItemName(itemId)}</h2>
        <p>ID: ${itemId}</p>
    `;

    /* DROPPED BY */

    const enemies=DATA["EnemySpawn.json"].enemies;
    const dropTables=DATA["EnemySpawn.json"].DropTables;

    const monsterSet=new Set();

    dropTables.forEach(table=>{

        table.items.forEach(item=>{

            if (String(item[0])!==String(itemId)) return;

            enemies
                .filter(e=>e[27]==table.id)
                .forEach(e=>monsterSet.add(e[5]));
        });
    });

    if (monsterSet.size>0){

        html+="<h3>Dropped By</h3>";

        [...monsterSet].forEach(enemyId=>{
            html+=`
                <a href="#" class="link"
                   onclick="navigate('?monster=${enemyId}'); return false;">
                    ${getEnemyName(enemyId)}
                </a>
            `;
        });
    }

    card.innerHTML=html;
    content.appendChild(card);
}
