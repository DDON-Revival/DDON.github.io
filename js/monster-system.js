const searchInput = document.getElementById("searchBox");
const searchFilters = document.getElementById("searchFilters");
const content = document.getElementById("content");

let currentFilter = "all";

/* ============================= */
/* HELPERS */
/* ============================= */

function getEnemyName(enemyId) {
    return DATA["enemy-names.json"]?.[enemyId] || enemyId;
}

function getStageName(stageId) {
    const stage = DATA["stage-names.json"]?.[stageId];
    return stage ? stage.en : stageId;
}

/* ============================= */
/* MONSTER LIST */
/* ============================= */

function renderMonsterList(filter = "") {

    if (!DATA["EnemySpawn.json"]) return;

    content.innerHTML = "";

    const enemies = DATA["EnemySpawn.json"].enemies;
    const monsterMap = new Map();

    enemies.forEach(e => {

        const stageId = e[0];
        const enemyId = e[5];
        const level = e[9];
        const dropTableId = e[27];

        if (!monsterMap.has(enemyId)) {
            monsterMap.set(enemyId, {
                stages: new Map(),
                dropTableId: dropTableId
            });
        }

        const monsterData = monsterMap.get(enemyId);

        if (!monsterData.stages.has(stageId)) {
            monsterData.stages.set(stageId, new Set());
        }

        monsterData.stages.get(stageId).add(level);
    });

    monsterMap.forEach((monsterData, enemyId) => {

        const name = getEnemyName(enemyId);

        if (!name.toLowerCase().includes(filter.toLowerCase())) return;

        const card = document.createElement("div");
        card.className = "card";

        let html = `
            <h2>
                <a href="#" class="link"
                   onclick="navigate('?monster=${enemyId}'); return false;">
                    ${name}
                </a>
            </h2>
        `;

        card.innerHTML = html;
        content.appendChild(card);
    });
}

/* ============================= */
/* SINGLE MONSTER */
/* ============================= */

function renderSingleMonster(enemyId) {

    const enemies = DATA["EnemySpawn.json"].enemies;
    content.innerHTML = "";

    const filtered = enemies.filter(e => String(e[5]) === String(enemyId));
    if (!filtered.length) return;

    const card = document.createElement("div");
    card.className = "card";

    const name = getEnemyName(enemyId);

    let html = `
        <h2>${name}</h2>
        <p><strong>ID:</strong> ${enemyId}</p>
    `;

    html += `
        <br><br>
        <a href="#" class="link"
           onclick="navigate('?'); return false;">
            ← Back
        </a>
    `;

    card.innerHTML = html;
    content.appendChild(card);
}

/* ============================= */
/* FILTER BUTTONS */
/* ============================= */

searchFilters.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", () => {

        searchFilters.querySelectorAll("button")
            .forEach(b => b.classList.remove("active"));

        btn.classList.add("active");
        currentFilter = btn.dataset.type;

        performSearch(searchInput.value.toLowerCase().trim());
    });

});

/* ============================= */
/* SEARCH */
/* ============================= */

searchInput.addEventListener("input", (e) => {
    performSearch(e.target.value.toLowerCase().trim());
});

function performSearch(value){

    if (!value){
        navigate("?");
        return;
    }

    const enemyData = DATA["enemy-names.json"];

    if (currentFilter === "all" || currentFilter === "enemy"){

        const results = Object.entries(enemyData)
            .filter(([id,name]) => name.toLowerCase().includes(value));

        if (results.length > 0){
            content.innerHTML = "";
            results.forEach(([id]) => renderMonsterList(value));
            return;
        }
    }

    renderMonsterList(value);
}

/* ============================= */
/* INIT */
/* ============================= */

const waitForData = setInterval(() => {
    if (window.dataLoaded){
        clearInterval(waitForData);
        router();
    }
},100);
