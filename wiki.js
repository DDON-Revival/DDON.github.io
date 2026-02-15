const DATA_PATH = "./datas/";

let EnemySpawn = null;
let EnemyNames = null;
let StageNames = null;
let ItemNames = null;

async function loadJSON(file){
    const res = await fetch(DATA_PATH + file);
    return await res.json();
}

async function loadText(file){
    const res = await fetch(DATA_PATH + file);
    return await res.text();
}

function parseTOML(text){
    const lines = text.split("\n");
    const items = {};

    lines.forEach(line=>{
        const match = line.match(/^(\d+)\s*=\s*"(.*)"/);
        if(match){
            items[parseInt(match[1])] = match[2];
        }
    });

    return items;
}

async function initWiki(){

    console.log("Loading Wiki Data...");

    EnemySpawn = await loadJSON("EnemySpawn.json");
    EnemyNames = await loadJSON("enemy-names.json");
    StageNames = await loadJSON("stage-names.json");

    const itemToml = await loadText("item_name.toml");
    ItemNames = parseTOML(itemToml);

    console.log("Wiki Data Loaded");
}

function getEnemyName(id){
    return EnemyNames[id] || "Unknown";
}

function getStageName(id){
    if(StageNames[id])
        return StageNames[id].en;
    return "Unknown Stage";
}

function getItemName(id){
    return ItemNames[id] || "Unknown Item";
}
