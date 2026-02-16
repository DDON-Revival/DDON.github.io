function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

function handleRouting() {

    const monsterId = getQueryParam("monster");
    const stageId = getQueryParam("stage");
    const itemId = getQueryParam("item");

    if (monsterId) {
        renderMonsterList(monsterId);
        return;
    }

    if (stageId) {
        openStage(stageId);
        return;
    }

    if (itemId) {
        openItem(itemId);
        return;
    }

    renderMonsterList();
}

window.addEventListener("load", () => {
    const wait = setInterval(() => {
        if (window.dataLoaded) {
            clearInterval(wait);
            handleRouting();
        }
    }, 100);
});
