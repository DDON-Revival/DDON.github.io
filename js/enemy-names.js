export async function loadEnemyNames() {
  const res = await fetch("data/enemy-names.json");
  return await res.json();
}
