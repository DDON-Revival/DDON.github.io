let monsters = [];

fetch("data/monsters.json")
  .then(r => r.json())
  .then(data => {
    monsters = data;
    render(monsters);
  });

document.getElementById("search").addEventListener("input", e => {
  const v = e.target.value.toLowerCase();
  render(monsters.filter(m => m.name.toLowerCase().includes(v)));
});

function render(list) {
  const el = document.getElementById("monster-list");
  el.innerHTML = "";
  list.forEach(m => {
    el.innerHTML += `
      <div class="box">
        <h3>${m.name} (Lv.${m.level})</h3>
        <b>Spawns:</b> ${m.spawns.join(", ")}<br>
        <b>Drops:</b> ${m.drops.join(", ")}
      </div>`;
  });
}
