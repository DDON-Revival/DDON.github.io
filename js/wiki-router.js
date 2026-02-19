function navigate(url) {
    history.pushState({}, "", url);
    router();
}

window.addEventListener("popstate", router);

function router() {

    if (!window.dataLoaded) {
        setTimeout(router, 50);
        return;
    }

    const params = new URLSearchParams(window.location.search);

    /* ---------------- MONSTER ---------------- */

    if (params.has("monster")) {
        openMonster(params.get("monster"));
        return;
    }

    /* ---------------- STAGE ---------------- */

    if (params.has("stage")) {
        openStage(params.get("stage"));
        return;
    }

    /* ---------------- ITEM ---------------- */

    if (params.has("item")) {
        openItem(params.get("item"));
        return;
    }

    /* ---------------- SHOP ---------------- */

    if (params.has("shop")) {
        openShop(params.get("shop"));
        return;
    }

    if (params.has("shops")) {
        renderShopList();
        return;
    }

    /* ---------------- SPECIAL ---------------- */

    if (params.has("special")) {

        const index = params.get("special");

        if (index === "") {
            renderSpecialShopList();
        } else {
            openSpecialShop(index);
        }

        return;
    }

    /* ---------------- DEFAULT ---------------- */

    renderMonsterList();
}
