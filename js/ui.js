const content = document.getElementById("content");
const searchInput = document.getElementById("searchBox");
const searchFilters = document.getElementById("searchFilters");

let currentTab = "all";

/* ---------------- TAB HANDLING ---------------- */

searchFilters.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {

        searchFilters.querySelectorAll("button")
            .forEach(b => b.classList.remove("active"));

        btn.classList.add("active");
        currentTab = btn.dataset.type;

        renderHome();
    });
});

/* ---------------- SEARCH ---------------- */

searchInput.addEventListener("input", () => {
    renderHome();
});

/* ---------------- HOME RENDER ---------------- */

function renderHome(){

    const value = searchInput.value.toLowerCase().trim();

    if (currentTab === "all" || currentTab === "enemy"){
        renderMonsterList(value);
        return;
    }

    if (currentTab === "item"){
        renderItemList(value);
        return;
    }

    if (currentTab === "stage"){
        renderStageList(value);
        return;
    }

    if (currentTab === "shop"){
        renderShopList(value);
        return;
    }

    if (currentTab === "special"){
        renderSpecialShopList(value);
        return;
    }
}
