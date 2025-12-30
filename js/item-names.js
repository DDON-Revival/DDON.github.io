export async function loadItemNames() {
  const res = await fetch(
    "https://raw.githubusercontent.com/riftcrystal/DDON-Translation/master/ui/00_message/common/item_name.toml",
    { cache: "no-store" }
  );

  const text = await res.text();
  const map = {};

  let current = null;

  function commit() {
    if (current && current.id && current.new) {
      map[String(current.id)] = { en: current.new };
    }
  }

  text.split("\n").forEach(line => {
    line = line.trim();

    // start of new [[item]]
    if (line === "[[item]]") {
      commit();
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
  });

  // commit last item (EOF)
  commit();

  return map;
}
