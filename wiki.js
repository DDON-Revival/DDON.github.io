Promise.all([
  fetch("datas/EnemySpawn.json").then(r=>r.json()),
  fetch("datas/enemy-names.json").then(r=>r.json()),
  fetch("datas/stage-names.json").then(r=>r.json()),
  fetch("datas/item_name.toml").then(r=>r.text())
]).then(([spawnData, enemyNames, stageNames, itemToml]) => {

    window.spawnData = spawnData;
    window.enemyNames = enemyNames;
    window.stageNames = stageNames;
    window.itemNames = parseToml(itemToml);

    buildWiki();
});

function buildEnemyIndex() {

    const enemyMap = {};

    spawnData.enemies.forEach(e => {

        const stageId = e[0];
        const enemyId = e[5];
        const level = e[9];
        const dropTableId = e[27];

        if (!enemyMap[enemyId]) {
            enemyMap[enemyId] = [];
        }

enemyMap[enemyId].push({
 stageId,
 level,
 groupId:e[2],
 subGroupId:e[3],
 posIndex:e[4],
 dropTableId:e[27]
});
    });

    return enemyMap;
}

function buildDropMap() {

    const map = {};

    spawnData.dropsTables.forEach(table => {
        map[table.id] = table.items;
    });

    return map;
}

function renderMonster(enemyId){

const hexKey="0x"+Number(enemyId).toString(16).padStart(6,"0").toUpperCase();

const name=enemyNames[hexKey]?.[currentLang]||enemyNames[hexKey]?.en||enemyId;

const spawns=enemyIndex[enemyId];

let html=`
<div class="card">
<div class="card-title">${name}</div>
<div class="card-body">
<strong>${LANG.spawn_locations}</strong>
`;

spawns.forEach(spawn=>{

const stageName=stageNames[spawn.stageId]?.[currentLang]||stageNames[spawn.stageId]?.en||spawn.stageId;

html+=`
<div>
${stageName} — Lv ${spawn.level}
</div>
`;

});

html+=`</div></div>`;

return html;

}

function renderMap(){

const content=document.getElementById("content");

content.innerHTML=`

<div class="card">

<div class="card-title">Interactive Map</div>

<select id="mapStage"></select>

<div id="mapContainer" style="position:relative">

<img id="mapImage" style="width:100%">

</div>

</div>
`;

buildStageSelector();

}

function spawnMarker(x,y,name,level){

const marker=document.createElement("div");

marker.className="enemy-marker";

marker.style.left=x+"px";
marker.style.top=y+"px";

marker.title=name+" Lv"+level;

document.getElementById("mapContainer")
.appendChild(marker);

}
