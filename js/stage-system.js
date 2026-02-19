function getStageName(id){
    return DATA["stage-names.json"]?.[id]?.en || id;
}

function renderStageList(filter=""){

    const stages = DATA["stage-names.json"];
    if (!stages) return;

    content.innerHTML = "";

    Object.keys(stages).forEach(id => {

        const name = stages[id].en;

        if (!name.toLowerCase().includes(filter)) return;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>${name}</h2>
            <button onclick="openStage('${id}')">Open</button>
        `;

        content.appendChild(card);
    });
}
