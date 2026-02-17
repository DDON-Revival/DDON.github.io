function renderStageList(){

    const stageData = DATA["stage-names.json"];
    if (!stageData) return;

    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    let html = "<h2>Stages</h2>";

    for (const id in stageData){
        html += `
            <a href="#" class="link"
               onclick="navigate('?stage=${id}'); return false;">
               ${stageData[id].en}
            </a>
        `;
    }

    card.innerHTML = html;
    content.appendChild(card);
}


function searchStages(value){

    const stageData = DATA["stage-names.json"];
    if(!stageData) return;

    for(const id in stageData){
        if(stageData[id].en.toLowerCase().includes(value)){
            openStage(id);
        }
    }
}

function openStage(stageId){

    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${getStageName(stageId)}</h2>
        <br>
        <a href="#" class="link"
           onclick="showDefaultView(); return false;">
           ← Back
        </a>
    `;

    content.appendChild(card);
}
