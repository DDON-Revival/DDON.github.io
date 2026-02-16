function getItemName(itemId) {

    if (!DATA["item_name.toml"]) return itemId;

    return DATA["item_name.toml"][itemId] || itemId;
}
