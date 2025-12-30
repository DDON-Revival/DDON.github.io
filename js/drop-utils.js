export function buildDropIndex(monsters) {
  const index = {};

  monsters.forEach(m => {
    if (!m.drops) return;

    m.drops.items.forEach(i => {
      if (!index[i.ItemId]) index[i.ItemId] = [];
      index[i.ItemId].push(m.name);
    });
  });

  return index;
}
