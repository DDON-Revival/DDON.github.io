function initMonsterSystem() {

    const searchInput = document.getElementById("searchBox");
    const content = document.getElementById("content");

    function getEnemyName(enemyId) {
        return DATA["enemy-names.json"][enemyId] || enemyId;
    }

    function getStageName(stageId) {
        const stage = DATA["stage-names.json"][stageId];
        return stage ? stage.en : stageId;
    }

    function renderMonsterList(filter = "") {

        content.innerHTML = "";

        const enemies = DATA["EnemySpawn.json"].enemies;

        const monsterMap = new Map();

        enemies.forEach(spawn => {

            const stageId = spawn[0];
            const enemyId = spawn[5];
            const level = spawn[9];

            if (!monsterMap.has(enemyId)) {
                monsterMap.set(enemyId, {});
            }

            const stageName = getStageName(stageId);

            if (!monsterMap.get(enemyId)[stageName]) {
                monsterMap.get(enemyId)[stageName] = new Set();
            }

            monsterMap.get(enemyId)[stageName].add(level);
        });

        monsterMap.forEach((stages, enemyId) => {

            const name = getEnemyName(enemyId);

            if (!name.toLowerCase().includes(filter.toLowerCase())) return;

            const card = document.createElement("div");
            card.className = "card";

            let html = `
                <h2>${name}</h2>
                <p><strong>ID:</strong> ${enemyId}</p>
                <h3>Spawn Locations</h3>
            `;

            Object.entries(stages).forEach(([stageName, levels]) => {

                const levelArray = Array.from(levels).sort((a,b)=>a-b);

                html += `
                    <div style="margin-bottom:8px;">
                        <strong>${stageName}</strong> — Lv ${levelArray.join(", ")}
                    </div>
                `;
            });

            card.innerHTML = html;
            content.appendChild(card);
        });
    }

    searchInput.addEventListener("input", e => {
        renderMonsterList(e.target.value);
    });

    renderMonsterList();
}
