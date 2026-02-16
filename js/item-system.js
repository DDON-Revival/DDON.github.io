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

            if (item[0] != itemId) return;

            const enemiesUsingTable = enemies.filter(e => e[27] == table.id);

            enemiesUsingTable.forEach(e => {
                monsterSet.add(e[5]);
            });
        });
    });

    const sortedMonsters = [...monsterSet].sort((a,b) => {
        return getEnemyName(a).localeCompare(getEnemyName(b));
    });

    sortedMonsters.forEach(enemyId => {

        const enemyName = getEnemyName(enemyId);

        html += `
            <a href="#" class="link"
               onclick="renderSingleMonster('${enemyId}'); return false;">
                ${enemyName}
            </a>
        `;
    });

    card.innerHTML = html;
    content.appendChild(card);
}
