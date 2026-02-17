const searchInput = document.getElementById("searchBox");
const content = document.getElementById("content");

/* -------------------- HELPERS -------------------- */

function getEnemyName(enemyId) {
    return DATA["enemy-names.json"]?.[enemyId] || enemyId;
}

function getStageName(stageId) {
    const stage = DATA["stage-names.json"]?.[stageId];
    return stage ? stage.en : stageId;
}

/* -------------------- SINGLE MONSTER -------------------- */

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
        <h3>Spawn Locations</h3>
    `;

    const stageMap = new Map();

    filtered.forEach(e => {
        const stageId = e[0];
        const level = e[9];

        if (!stageMap.has(stageId)) stageMap.set(stageId, new Set());
        stageMap.get(stageId).add(level);
    });

    [...stageMap.entries()]
        .sort((a,b) => getStageName(a[0]).localeCompare(getStageName(b[0])))
        .forEach(([stageId, levels]) => {

            const sorted = [...levels].sort((a,b)=>a-b);
            const min = sorted[0];
            const max = sorted[sorted.length-1];

            const levelDisplay = min === max ? `Lv ${min}` : `Lv ${min}-${max}`;

            html += `
                <a href="#" class="link"
                   onclick="navigate('?stage=${stageId}'); return false;">
                    ${getStageName(stageId)} (${levelDisplay})
                </a>
            `;
        });

    html += `<h3>Drops</h3>`;
    html += renderDrops(filtered[0][27]);

    html += `
        <br><br>
        <a href="#" class="link"
           onclick="navigate('?'); return false;">
            ← Back to Monsters
        </a>
    `;

    card.innerHTML = html;
    content.appendChild(card);
}

/* -------------------- MONSTER LIST -------------------- */

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
            <h3>Spawn Locations</h3>
        `;

        [...monsterData.stages.entries()]
            .sort((a,b) => getStageName(a[0]).localeCompare(getStageName(b[0])))
            .forEach(([stageId, levels]) => {

                const sorted = [...levels].sort((a,b)=>a-b);
                const min = sorted[0];
                const max = sorted[sorted.length - 1];

                const levelDisplay = min === max
                    ? `Lv ${min}`
                    : `Lv ${min}-${max}`;

                html += `
                    <a href="#" class="link"
                       onclick="navigate('?stage=${stageId}'); return false;">
                        ${getStageName(stageId)} (${levelDisplay})
                    </a>
                `;
            });

        html += `<h3>Drops</h3>`;
        html += renderDrops(monsterData.dropTableId);

        card.innerHTML = html;
        content.appendChild(card);
    });
}

searchInput.addEventListener("input", (e) => {

    const value = e.target.value.toLowerCase().trim();

    if (!value) {
        navigate("?");
        return;
    }

    const itemData = DATA["item_names.json"];
    const stageData = DATA["stage-names.json"];

    /* =========================
       1️⃣ EXACT MONSTER MATCH
       (nur wenn exakt gleich)
    ========================== */

    const enemies = DATA["enemy-names.json"];

    for (const id in enemies) {
        if (enemies[id].toLowerCase() === value) {
            navigate(`?monster=${id}`);
            return;
        }
    }

    /* =========================
       2️⃣ ITEM MATCH
    ========================== */

    if (itemData && itemData.item) {
        for (const item of itemData.item) {
            if (!item.new) continue;

            if (item.new.toLowerCase() === value) {
                navigate(`?item=${item.id}`);
                return;
            }
        }
    }

    /* =========================
       3️⃣ STAGE MATCH
    ========================== */

    for (const id in stageData) {
        if (stageData[id].en.toLowerCase() === value) {
            navigate(`?stage=${id}`);
            return;
        }
    }

    /* =========================
       FALLBACK → FILTER MONSTER LIST
       (Hier passiert dein Orc-Fall)
    ========================== */

    renderMonsterList(value);
});

/* -------------------- INIT -------------------- */

const waitForData = setInterval(() => {
    if (window.dataLoaded) {
        clearInterval(waitForData);
        router();
    }
}, 100);
