function renderGatheringList(){

    const rows = DATA["GatheringItem.csv"];
    if (!rows) return;

    content.innerHTML = "";

    const card = document.createElement("div");
    card.className="card";

    let html = `<h2>Gathering Items</h2>`;

    rows.slice(1).forEach(row=>{

        const stageId=row[0];
        const itemId=row[1];

        html+=`
            <div class="drop-item">
                ${getStageName(stageId)}
                →
                ${getItemName(itemId)}
            </div>
        `;
    });

    card.innerHTML=html;
    content.appendChild(card);
}
