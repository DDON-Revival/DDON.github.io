fetch("data/EnemySpawn.json")
  .then(r => r.json())
  .then(spawns => {
    window.MONSTERS = groupMonsters(spawns);
    buildSidebar();
  });

function buildSidebar() {
  const el = document.getElementById("sidebar");
  window.MONSTERS.forEach(m => {
    el.innerHTML += `
      <a href="monster.html?id=${m.id}">
        ${m.name}
      </a>`;
  });
}
