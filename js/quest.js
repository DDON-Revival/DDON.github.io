async function openQuest(id){

    const res = await fetch(`questwiki/q${id}.json`);
    const data = await res.json();

    content.innerHTML="";

    const card=document.createElement("div");
    card.className="card";

    let html=`
        <h2>${data.comment}</h2>
        <p><strong>Quest ID:</strong> ${data.quest_id}</p>
        <p><strong>Base Level:</strong> ${data.base_level}</p>
        <h3>Rewards</h3>
    `;

    data.rewards.forEach(r=>{

        if(r.type==="exp"){
            html+=`<div class="drop-item">EXP: ${r.amount}</div>`;
        }

        if(r.type==="wallet"){
            html+=`
                <div class="drop-item">
                ${r.wallet_type}: ${r.amount}
                </div>
            `;
        }

        if(r.type==="select"){
            r.loot_pool.forEach(item=>{
                html+=`
                    <div class="drop-item">
                        ${item.comment} x${item.num}
                    </div>
                `;
            });
        }
    });

    html+=`
        <br><a href="#" class="link"
        onclick="navigate('?'); return false;">
        ← Back
        </a>
    `;

    card.innerHTML=html;
    content.appendChild(card);
}
