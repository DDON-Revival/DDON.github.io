export function groupByEnemy(enemies) {
  const map = {};

  enemies.forEach(e => {
    const id = e.EnemyId;
    if (!map[id]) {
      map[id] = {
        id,
        name: e.NamedEnemyParamsId || `Enemy ${id}`,
        minLv: e.Lv,
        maxLv: e.Lv,
        drops: e.drops,
        spawns: []
      };
    }

    map[id].minLv = Math.min(map[id].minLv, e.Lv);
    map[id].maxLv = Math.max(map[id].maxLv, e.Lv);

    map[id].spawns.push({
      stage: e.StageId,
      time: e.SpawnTime
    });
  });

  return Object.values(map);
}
