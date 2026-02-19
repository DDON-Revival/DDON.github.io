const DATA = {};

async function loadJSON(name, url) {
    try {
        const res = await fetch(url);
        DATA[name] = await res.json();
        console.log("Loaded:", name);
    } catch (e) {
        console.error("Failed loading:", name, e);
    }
}

async function loadCSV(name, url) {
    try {
        const res = await fetch(url);
        const text = await res.text();

        const rows = text.split("\n").map(r => r.split(","));
        DATA[name] = rows;

        console.log("Loaded CSV:", name);
    } catch (e) {
        console.error("Failed loading CSV:", name, e);
    }
}

async function loadAll() {

    await loadJSON("EnemySpawn.json",
        "https://raw.githubusercontent.com/DDON-Revival/DDON.github.io/main/datas/EnemySpawn.json");

    await loadJSON("Shop.json",
        "https://raw.githubusercontent.com/DDON-Revival/DDON.github.io/main/datas/Shop.json");

    await loadJSON("SpecialShops.json",
        "https://raw.githubusercontent.com/DDON-Revival/DDON.github.io/main/datas/SpecialShops.json");

    await loadJSON("item_names.json",
        "https://raw.githubusercontent.com/DDON-Revival/DDON.github.io/main/datas/item_names.json");

    await loadJSON("stage-names.json",
        "https://raw.githubusercontent.com/DDON-Revival/DDON.github.io/main/datas/stage-names.json");

    await loadJSON("enemy-names.json",
        "https://raw.githubusercontent.com/DDON-Revival/DDON.github.io/main/datas/enemy-names.json");

    await loadCSV("GatheringItem.csv",
        "https://raw.githubusercontent.com/DDON-Revival/DDON.github.io/main/datas/GatheringItem.csv");

    window.dataLoaded = true;
    console.log("ALL DATA LOADED");
}

loadAll();
