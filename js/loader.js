const DATA = {};

async function loadJSON(name){
    const res = await fetch(`datas/${name}`);
    DATA[name] = await res.json();
    console.log("Loaded:", name);
}

async function loadCSV(name){
    const res = await fetch(`datas/${name}`);
    const text = await res.text();
    DATA[name] = text.split("\n").map(r=>r.split(","));
    console.log("Loaded CSV:", name);
}

async function loadAll(){

    await loadJSON("EnemySpawn.json");
    await loadJSON("Shop.json");
    await loadJSON("SpecialShops.json");
    await loadJSON("item_names.json");
    await loadJSON("stage-names.json");
    await loadJSON("enemy-names.json");

    await loadCSV("GatheringItem.csv");

    window.dataLoaded = true;
    console.log("ALL DATA LOADED");
}

loadAll();
