export async function loadStageNames() {
  const res = await fetch("data/stage-names.json");
  return await res.json();
}
