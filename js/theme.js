(function () {
  const key = "ddon-theme";

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(key, theme);
  }

  window.toggleTheme = function () {
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    apply(current === "dark" ? "light" : "dark");
  };

  const saved = localStorage.getItem(key) || "dark";
  apply(saved);
})();
