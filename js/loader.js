const DATA = {};

async function loadJSON(name) {
    const res = await fetch(`datas/${name}`);
    DATA[name] = await res.json();
}

async function loadAll() {

    await loadJSON("EnemySpawn.json");
    await loadJSON("enemy-names.json");
    await loadJSON("stage-names.json");
	await loadJSON("item_name.toml");

    console.log("All data loaded.");
    window.dataLoaded = true;
}

loadAll();
