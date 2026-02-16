const DATA = {};

async function loadJSON(name) {
    const res = await fetch(`datas/${name}`);
    DATA[name] = await res.json();
}

async function loadAll() {
    await Promise.all([
        loadJSON("EnemySpawn.json"),
        loadJSON("enemy-names.json"),
        loadJSON("stage-names.json")
    ]);

    console.log("All data loaded.");

    // 🔥 WICHTIG:
    if (window.initWiki) {
        window.initWiki();
    }
}

loadAll();
