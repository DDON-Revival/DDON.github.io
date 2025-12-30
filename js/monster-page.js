import { groupMonsters } from "./monster-data.js";

const id = new URLSearchParams(location.search).get("id");

fetch("data/EnemySpawn.json")
  .then(r => r.json())
  .then(spawns => {
    const monsters = groupMonsters(spawns);
    const m = monsters.find(x => x.id == id);

    document.getElementById("content").innerHTML = `
      <h1>${m.name}</h1>
      <p>Level: ${m.level}</p>

      <h2>Drops</h2>
      <ul>
        ${m.drops.map(d => `<li>${d.Name}</li>`).join("")}
      </ul>

      <h2>Spawn Locations</h2>
      <p>Total spawns: ${m.spawns.length}</p>
    `;
  });
