function navigate(url){
    history.pushState({}, "", url);
    router();
}

window.addEventListener("popstate", router);

function router(){

    if (!window.dataLoaded){
        setTimeout(router,50);
        return;
    }

    const params = new URLSearchParams(window.location.search);

    /* ================= MONSTER ================= */

    if (params.has("monster")){
        openMonster(params.get("monster"));
        return;
    }

    /* ================= ITEM ================= */

    if (params.has("item")){
        openItem(params.get("item"));
        return;
    }

    /* ================= STAGE ================= */

    if (params.has("stage")){
        openStage(params.get("stage"));
        return;
    }

    /* ================= SHOP LIST ================= */

    if (params.has("shops")){
        renderShopList();
        return;
    }

    /* ================= SINGLE SHOP ================= */

    if (params.has("shop")){
        openShop(params.get("shop"));
        return;
    }

    /* ================= SPECIAL LIST ================= */

    if (params.has("special") && params.get("special")===""){
        renderSpecialShopList();
        return;
    }

    /* ================= SINGLE SPECIAL ================= */

    if (params.has("special")){
        openSpecialShop(params.get("special"));
        return;
    }

    /* ================= DEFAULT ================= */

    renderMonsterList();
}
