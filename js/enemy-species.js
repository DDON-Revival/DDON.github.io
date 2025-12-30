export async function loadEnemySpecies() {
  const res = await fetch("data/enemy-species.json");
  return await res.json();
}
