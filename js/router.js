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

    if (params.has("monster")) return openMonster(params.get("monster"));
    if (params.has("item")) return openItem(params.get("item"));
    if (params.has("stage")) return openStage(params.get("stage"));
    if (params.has("shop")) return openShop(params.get("shop"));
    if (params.has("special")) return openSpecialShop(params.get("special"));

    renderMonsterList();
}
