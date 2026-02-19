function getEnemyName(id){
    return DATA["enemy-names.json"]?.[id] || id;
}

function getStageName(id){
    return DATA["stage-names.json"]?.[id]?.en || id;
}

function getItemName(id){
    const items = DATA["item_names.json"]?.item;
    if (!items) return id;

    const found = items.find(i => String(i.id) === String(id));
    return found ? found.new : id;
}

function getDropTable(id){
    return DATA["EnemySpawn.json"]?.dropsTables?.find(t => t.id == id);
}

function renderDrops(dropTableId){

    const table = getDropTable(dropTableId);
    if (!table) return "<div>No Drops</div>";

    let html = "";

    table.items.forEach(item => {

        const itemId = item[0];
        const min = item[1];
        const max = item[2];
        const chance = Math.round(item[5] * 100);

        html += `
            <div class="drop-item">
                <a href="#" onclick="navigate('?item=${itemId}')">
                    ${getItemName(itemId)}
                </a>
                (${min}${max>1?'-'+max:''}) - ${chance}%
            </div>
        `;
    });

    return html;
}
