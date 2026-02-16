window.initWiki = function () {

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

        const grouped = {};

        enemies.forEach(e => {
            const stageId = e[0];
            const enemyId = e[5];
            const level = e[9];

            if (!grouped[enemyId]) {
                grouped[enemyId] = [];
            }

            grouped[enemyId].push({
                stageId,
                level
            });
        });

        Object.keys(grouped).forEach(enemyId => {

            const name = getEnemyName(enemyId);

            if (!name.toLowerCase().includes(filter.toLowerCase()))
                return;

            const card = document.createElement("div");
            card.className = "card";

            let html = `
                <h2>${name}</h2>
                <p><strong>ID:</strong> ${enemyId}</p>
                <h3>Spawn Locations</h3>
                <ul>
            `;

            // 🔥 REMOVE DUPLICATES
            const uniqueSpawns = new Set();

            grouped[enemyId].forEach(spawn => {
                const stageName = getStageName(spawn.stageId);
                const key = stageName + "_" + spawn.level;

                if (!uniqueSpawns.has(key)) {
                    uniqueSpawns.add(key);
                    html += `<li>${stageName} (Lv ${spawn.level})</li>`;
                }
            });

            html += `</ul>`;
            card.innerHTML = html;
            content.appendChild(card);
        });
    }

    searchInput.addEventListener("input", e => {
        renderMonsterList(e.target.value);
    });

    renderMonsterList();
};
