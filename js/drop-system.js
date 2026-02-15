function getDropsByTableId(id) {
    const tables = DATA["EnemySpawn.json"].dropsTables;

    const table = tables.find(t => t.id === id);
    if (!table) return [];

    return table.items.map(item => ({
        itemId: item[0],
        min: item[1],
        max: item[2],
        chance: item[5]
    }));
}
