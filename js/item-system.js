function openItem(itemId) {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const name = getItemName(itemId);

    const enemies = DATA["EnemySpawn.json"].enemies;
    const dropTables = DATA["EnemySpawn.json"].dropsTables;

    const card = document.createElement("div");
    card.className = "card";

    let html = `
        <h2>${name}</h2>
        <p><strong>ID:</strong> ${itemId}</p>
        <h3>Dropped By</h3>
    `;

    const monsterSet = new Set();

    dropTables.forEach(table => {

        table.items.forEach(item => {

            if (String(item[0]) !== String(itemId)) return;

            const enemiesUsingTable = enemies.filter(e => e[27] == table.id);

            enemiesUsingTable.forEach(e => {
                monsterSet.add(e[5]);
            });
        });
    });

    const sortedMonsters = [...monsterSet].sort((a,b) =>
        getEnemyName(a).localeCompare(getEnemyName(b))
    );

    sortedMonsters.forEach(enemyId => {

        html += `
            <a href="#" class="link"
               onclick="renderSingleMonster('${enemyId}'); return false;">
                ${getEnemyName(enemyId)}
            </a>
        `;
    });

    // BACK BUTTON
    html += `
        <br><br>
        <a href="#" class="link"
           onclick="renderMonsterList(); return false;">
            ← Back to Monster List
        </a>
    `;

    card.innerHTML = html;
    content.appendChild(card);
}
