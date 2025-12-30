const langKey = "ddon-lang";

export function getLang() {
  return localStorage.getItem(langKey) || "en";
}

export function toggleLang() {
  const next = getLang() === "en" ? "jp" : "en";
  localStorage.setItem(langKey, next);
  location.reload();
}

export function renderSidebar() {
  const lang = getLang();

  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  sidebar.innerHTML = `
    <h1>DDON Wiki</h1>

    <div class="section">
      <a href="index.html">Home</a>
    </div>

    <div class="section">
      <a href="monsters.html">Monster</a>
      <a href="items.html">Items</a>
      <a href="stages.html">Stages</a>
    </div>

    <div class="section">
      <a href="wiki.html">Wiki</a>
    </div>

    <button id="langToggle">
      Language: ${lang === "en" ? "EN" : "JP"}
    </button>
  `;

  document.body.prepend(sidebar);

  document
    .getElementById("langToggle")
    .addEventListener("click", toggleLang);
}
