export function groupMonsters(spawns) {
  const map = {};

  spawns.forEach(s => {
    const id = s.EnemyId;
    if (!map[id]) {
      map[id] = {
        id,
        name: s.EnemyName,
        level: s.Level,
        drops: s.Drops || [],
        spawns: []
      };
    }

    map[id].spawns.push({
      area: s.AreaId,
      pos: s.Position
    });
  });

  return Object.values(map);
}
