async function openQuest(id){

    const url = `https://raw.githubusercontent.com/DDON-Revival/DDON.github.io/main/questwiki/q${id}.json`;

    const res = await fetch(url);
    const data = await res.json();

    content.innerHTML="";

    const card=document.createElement("div");
    card.className="card";

    let html=`
        <h2>${data.comment}</h2>
        <p>Base Level: ${data.base_level}</p>
        <p>Quest ID: ${data.quest_id}</p>
        <h3>Rewards</h3>
    `;

    data.rewards.forEach(r=>{

        if (r.type==="select"){
            r.loot_pool.forEach(item=>{
                html+=`
                    <div class="drop-item">
                        ${item.comment} x${item.num}
                    </div>
                `;
            });
        }

        if (r.type==="wallet"){
            html+=`
                <div class="drop-item">
                    ${r.wallet_type}: ${r.amount}
                </div>
            `;
        }

        if (r.type==="exp"){
            html+=`
                <div class="drop-item">
                    EXP: ${r.amount}
                </div>
            `;
        }
    });

    card.innerHTML=html;
    content.appendChild(card);
}
