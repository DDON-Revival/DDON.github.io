export function groupByEnemy(enemies) {
  const map = {};

  enemies.forEach(e => {
    const id = e.EnemyId;

    if (!map[id]) {
      map[id] = {
        id,
        // Übergangslösung: ID anzeigen
        name: e.NamedEnemyParamsId
          ? `Enemy ${id} (Named ${e.NamedEnemyParamsId})`
          : `Enemy ${id} (DropsTable ${e.DropsTableId})`,
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
