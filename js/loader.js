window.DATA = {};

async function loadAllData() {
    const base = "datas/";

    const files = [
        "EnemySpawn.json",
        "enemy-names.json",
        "stage-names.json",
        "GatheringItem.csv",
        "item_name.toml"
    ];

    for (const file of files) {
        const res = await fetch(base + file);
        if (file.endsWith(".json")) {
            DATA[file] = await res.json();
        } else {
            DATA[file] = await res.text();
        }
    }

    console.log("All data loaded.");
}

loadAllData();
