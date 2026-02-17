function navigate(url) {
    history.pushState({}, "", url);
    router();
}

window.addEventListener("popstate", router);

function router() {

    const params = new URLSearchParams(window.location.search);

    if (params.has("monster")) {
        renderSingleMonster(params.get("monster"));
        return;
    }

    if (params.has("stage")) {
        openStage(params.get("stage"));
        return;
    }

    if (params.has("item")) {
        openItem(params.get("item"));
        return;
    }

    renderMonsterList();
}
