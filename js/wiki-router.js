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

    if (params.has("monster")){
        openMonster(params.get("monster"));
        return;
    }

    renderMonsterList();
}
