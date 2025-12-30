export function parseDDON(data) {
  const enemySchema = data.schemas.enemies;
  const dropSchema = data.schemas["dropsTables.items"];

  // DropsTables nach ID mapen
  const dropsMap = {};
  data.dropsTables.forEach(dt => {
    dropsMap[dt.id] = {
      id: dt.id,
      name: dt.name,
      items: dt.items.map(i => {
        const obj = {};
        dropSchema.forEach((key, idx) => obj[key] = i[idx]);
        return obj;
      })
    };
  });

  // Enemies parsen
  const enemies = data.enemies.map(e => {
    const obj = {};
    enemySchema.forEach((key, idx) => obj[key] = e[idx]);
    obj.drops = dropsMap[obj.DropsTableId] || null;
    return obj;
  });

  return { enemies, dropsMap };
}
