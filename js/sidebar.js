document.addEventListener("DOMContentLoaded", async () => {
  const sidebar = document.createElement("nav");
  sidebar.className = "sidebar";

  sidebar.innerHTML = `
    <h2>DDON Wiki</h2>

    <ul>
      <li><a href="index.html">Home</a></li>
    </ul>

    <h3>Search</h3>
    <ul>
      <li><a href="monsters.html">Monster Search</a></li>
      <li><a href="drops.html">Item / Drop Search</a></li>
      <li><a href="stages.html">Stage Search</a></li>
    </ul>

    <h3>Wiki</h3>
    <ul>
      <li><a href="monsters.html">Monsters</a></li>
      <li><a href="items.html">Items</a></li>
      <li><a href="stages.html">Stages</a></li>
    </ul>

    <hr>

    <button id="langToggle">EN / JP</button>
  `;

  document.body.prepend(sidebar);
});
