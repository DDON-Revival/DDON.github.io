const searchBox = document.getElementById("searchBox");
const results = document.getElementById("results");

function getEnemyName(id) {
    return DATA["enemy-names.json"][id] || id;
}

function getStageName(id) {
    const stage = DATA["stage-names.json"][id];
    return stage ? stage.en : id;
}

function render(filter = "") {

    if (!DATA["EnemySpawn.json"]) return;

    results.innerHTML = "";

    const enemies = DATA["EnemySpawn.json"].enemies;
    const map = new Map();

    enemies.forEach(e => {
        const enemyId = e[5];
        if (!map.has(enemyId)) {
            map.set(enemyId, []);
        }
        map.get(enemyId).push(e);
    });

    map.forEach((spawns, enemyId) => {

        const name = getEnemyName(enemyId);
        if (!name.toLowerCase().includes(filter.toLowerCase())) return;

        const card = document.createElement("div");
        card.className = "card";

        let html = `
            <h2>${name}</h2>
            <p><strong>ID:</strong> ${enemyId}</p>
            <h3>Spawn Locations</h3>
        `;

        spawns.forEach(spawn => {
            const stageId = spawn[0];
            const level = spawn[9];
            const stageName = getStageName(stageId);

            html += `<div>${stageName} (Lv ${level})</div>`;
        });

        card.innerHTML = html;
        results.appendChild(card);
    });
}

searchBox.addEventListener("input", e => {
    render(e.target.value);
});

setTimeout(() => render(), 1000);
