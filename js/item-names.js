export async function loadItemNames() {
  const res = await fetch(
    "https://raw.githubusercontent.com/riftcrystal/DDON-Translation/master/ui/00_message/common/item_name.toml"
  );

  const text = await res.text();
  const map = {};

  let current = null;

  text.split("\n").forEach(line => {
    line = line.trim();

    // start of [[item]]
    if (line === "[[item]]") {
      current = {};
      return;
    }

    if (!current) return;

    if (line.startsWith("id")) {
      current.id = line.split("=")[1].trim();
      return;
    }

    if (line.startsWith("new")) {
      const value = line.split("=").slice(1).join("=").trim();
      current.new = value.replace(/^['"]|['"]$/g, "");
      return;
    }

    // end of entry → save
    if (current.id && current.new) {
      map[current.id] = { en: current.new };
      current = null;
    }
  });

  return map;
}
