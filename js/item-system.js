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

    dropTables.forEach(table => {

        table.items.forEach(item => {

            if (item[0] != itemId) return;

            const enemiesUsingTable = enemies.filter(e => e[27] == table.id);
            const uniqueEnemies = new Set(enemiesUsingTable.map(e => e[5]));

            uniqueEnemies.forEach(enemyId => {

                const enemyName = getEnemyName(enemyId);

                html += `
                    <div>
                        <a href="#" onclick="renderSingleMonster('${enemyId}')">
                            ${enemyName}
                        </a>
                    </div>
                `;
            });

        });

    });

    card.innerHTML = html;
    content.appendChild(card);
}
