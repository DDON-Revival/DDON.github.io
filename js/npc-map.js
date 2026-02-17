const NPC_NAMES = {
    100: "Potion Merchant",
    101: "Equipment Dealer",
    11: "White Dragon Festival NPC",
    12: "Trinket Exchange NPC"
    // hier deine IDs erweitern
};

function getNpcName(shopId) {
    return NPC_NAMES[shopId] || `Shop ${shopId}`;
}
