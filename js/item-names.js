export async function loadItemNames() {
  const res = await fetch(
    "https://raw.githubusercontent.com/riftcrystal/DDON-Translation/master/ui/00_message/common/item_name.toml"
  );
  const text = await res.text();

  const map = {};
  let currentId = null;

  text.split("\n").forEach(line => {
    line = line.trim();

    // [19508]
    if (line.startsWith("[") && line.endsWith("]")) {
      currentId = line.slice(1, -1);
      map[currentId] = {};
    }

    // en = "Blood Orb"
    if (currentId && line.startsWith("en")) {
      const value = line.split("=").slice(1).join("=").trim();
      map[currentId].en = value.replace(/^"|"$/g, "");
    }
  });

  return map;
}
