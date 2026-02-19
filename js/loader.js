const DATA = {};

async function loadJSON(key, url) {
    const res = await fetch(url);
    if (!res.ok) {
        console.error("Failed loading:", url);
        return;
    }
    DATA[key] = await res.json();
}

async function loadCSV(key, url) {
    const res = await fetch(url);
    if (!res.ok) {
        console.error("Failed loading:", url);
        return;
    }
    const text = await res.text();
    DATA[key] = text;
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

    console.log("ALL DATA LOADED CLEAN");
    window.dataLoaded = true;
}

loadAll();
