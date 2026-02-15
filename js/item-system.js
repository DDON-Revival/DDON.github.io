function parseItemToml() {
    const text = DATA["item_name.toml"];
    const lines = text.split("\n");

    const map = {};

    lines.forEach(line => {
        if (line.includes("=")) {
            const parts = line.split("=");
            const id = parts[0].trim();
            const name = parts[1].replace(/"/g,"").trim();
            map[id] = name;
        }
    });

    return map;
}
