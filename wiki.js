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
            dropTableId
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

function renderMonster(enemyId) {

    const hexKey = "0x" + Number(enemyId).toString(16).padStart(6, "0").toUpperCase();
	const name = enemyNames[hexKey]?.en || enemyId;
    const spawns = enemyIndex[enemyId];

    spawns.forEach(spawn => {

        const stageName = stageNames[spawn.stageId]?.en || spawn.stageId;
        const drops = dropMap[spawn.dropTableId];

        // Hier baust du HTML
    });
}
