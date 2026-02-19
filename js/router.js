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

    const params=new URLSearchParams(window.location.search);

    if(params.has("monster")){
        openMonster(params.get("monster"));
        return;
    }

    if(params.has("stage")){
        openStage(params.get("stage"));
        return;
    }

    if(params.has("item")){
        openItem(params.get("item"));
        return;
    }

    if(params.has("shop")){
        openShop(params.get("shop"));
        return;
    }

    if(params.has("special")){
        openSpecialShop(params.get("special"));
        return;
    }

    renderMonsterList();
}
