const DATA = {};

async function loadJSON(name, path) {
    const res = await fetch(path);
    DATA[name] = await res.json();
    console.log("Loaded:", name);
}

async function loadCSV(name, path) {
    const res = await fetch(path);
    const text = await res.text();
    DATA[name] = text.split("\n").map(r => r.split(","));
    console.log("Loaded CSV:", name);
}

async function loadAll() {

    await loadJSON("EnemySpawn", "datas/EnemySpawn.json");
    await loadJSON("Shop", "datas/Shop.json");
    await loadJSON("SpecialShops", "datas/SpecialShops.json");
    await loadJSON("Items", "datas/item_names.json");
    await loadJSON("Stages", "datas/stage-names.json");
    await loadJSON("Enemies", "datas/enemy-names.json");

    await loadCSV("Gathering", "datas/GatheringItem.csv");

    window.dataLoaded = true;
    console.log("ALL DATA LOADED");

    router();
}

loadAll();
