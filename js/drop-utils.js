export function buildDropIndex(monsters) {
  const index = {};

  monsters.forEach(m => {
    if (!m.drops || !m.drops.items) return;

    m.drops.items.forEach(i => {
      const itemId = String(i.ItemId);
      if (!index[itemId]) index[itemId] = new Set();
      index[itemId].add(m.name);
    });
  });

  // Sets → Arrays
  Object.keys(index).forEach(k => {
    index[k] = [...index[k]];
  });

  return index;
}
