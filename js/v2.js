const DATA = {};
const content = document.getElementById("content");
const searchBox = document.getElementById("searchBox");
const tabs = document.querySelectorAll(".tabs button");

let currentTab = "monster";

/* ================= LOAD DATA ================= */

async function loadJSON(name,url){
    const res = await fetch(url);
    DATA[name] = await res.json();
}

async function loadCSV(name,url){
    const res = await fetch(url);
    const text = await res.text();
    DATA[name] = text.split("\n").map(r=>r.split(","));
}

async function init(){

    await loadJSON("EnemySpawn","datas/EnemySpawn.json");
    await loadJSON("Shop","datas/Shop.json");
    await loadJSON("SpecialShops","datas/SpecialShops.json");
    await loadJSON("Items","datas/item_names.json");
    await loadJSON("Stages","datas/stage-names.json");
    await loadJSON("Enemies","datas/enemy-names.json");
    await loadJSON("Crafting","datas/CraftingRecipes.json");
    await loadJSON("CraftingPlus","datas/CraftingRecipesGradeUp.json");

    await loadCSV("Gathering","datas/GatheringItem.csv");

    renderHome();
}

init();

/* ================= HELPERS ================= */

function getItemName(id){
    const found = DATA.Items.item.find(i=>String(i.id)===String(id));
    return found ? found.new : id;
}

function getEnemyName(id){
    return DATA.Enemies[id] || id;
}

function getStageName(id){
    return DATA.Stages[id]?.en || id;
}

/* ================= TAB SWITCH ================= */

tabs.forEach(btn=>{
    btn.addEventListener("click",()=>{
        tabs.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
        currentTab = btn.dataset.tab;
        renderHome();
    });
});

searchBox.addEventListener("input",renderHome);

/* ================= HOME ================= */

function renderHome(){

    const filter = searchBox.value.toLowerCase();

    if(currentTab==="monster") return renderMonsterList(filter);
    if(currentTab==="item") return renderItemList(filter);
    if(currentTab==="stage") return renderStageList(filter);
    if(currentTab==="shop") return renderShopList(filter);
    if(currentTab==="special") return renderSpecialList(filter);
    if(currentTab==="gathering") return renderGathering();
    if(currentTab==="quest") return renderQuestInfo();
    if(currentTab==="crafting") return renderCrafting(filter);
    if(currentTab==="craftingPlus") return renderCraftingPlus(filter);
}

/* ================= MONSTERS ================= */

function renderMonsterList(filter){

    content.innerHTML="";
    const unique=new Set();
    DATA.EnemySpawn.enemies.forEach(e=>unique.add(e[5]));

    [...unique].forEach(id=>{
        const name=getEnemyName(id);
        if(!name.toLowerCase().includes(filter)) return;

        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`<h2>${name}</h2>`;
        content.appendChild(card);
    });
}

/* ================= ITEMS ================= */

function renderItemList(filter){

    content.innerHTML="";
    DATA.Items.item.forEach(item=>{
        if(!item.new.toLowerCase().includes(filter)) return;

        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`<h2>${item.new}</h2>`;
        content.appendChild(card);
    });
}

/* ================= STAGES ================= */

function renderStageList(filter){

    content.innerHTML="";
    Object.keys(DATA.Stages).forEach(id=>{
        const name=getStageName(id);
        if(!name.toLowerCase().includes(filter)) return;

        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`<h2>${name}</h2>`;
        content.appendChild(card);
    });
}

/* ================= SHOPS ================= */

function renderShopList(filter){

    content.innerHTML="";
    DATA.Shop.forEach(shop=>{
        if(!String(shop.ShopId).includes(filter)) return;

        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`<h2>Shop ${shop.ShopId}</h2>`;
        content.appendChild(card);
    });
}

/* ================= SPECIAL ================= */

function renderSpecialList(filter){

    content.innerHTML="";
    DATA.SpecialShops.shops.forEach(shop=>{
        if(!shop.shop_type.toLowerCase().includes(filter)) return;

        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`<h2>${shop.shop_type}</h2>`;
        content.appendChild(card);
    });
}

/* ================= GATHERING ================= */

function renderGathering(){

    content.innerHTML="";
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML="<h2>Gathering Items</h2>";

    DATA.Gathering.slice(1).forEach(row=>{
        card.innerHTML+=`
        <div>
            ${getStageName(row[0])} → ${getItemName(row[1])}
        </div>`;
    });

    content.appendChild(card);
}

/* ================= QUEST ================= */

function renderQuestInfo(){
    content.innerHTML="";
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML="<h2>Quest System Ready</h2>";
    content.appendChild(card);
}

/* ================= CRAFTING ================= */

function renderCrafting(filter){

    content.innerHTML="";

    DATA.Crafting.forEach(cat=>{
        cat.RecipeList.forEach(r=>{

            const itemName=getItemName(r.ItemID);
            if(!itemName.toLowerCase().includes(filter)) return;

            const card=document.createElement("div");
            card.className="card";

            let html=`<h2>${itemName}</h2><h3>Materials</h3>`;

            r.CraftMaterialList.forEach(mat=>{
                html+=`<div>${getItemName(mat.ItemId)} x${mat.Num}</div>`;
            });

            card.innerHTML=html;
            content.appendChild(card);
        });
    });
}

/* ================= CRAFTING PLUS ================= */

function renderCraftingPlus(filter){

    content.innerHTML="";

    DATA.CraftingPlus.forEach(cat=>{
        cat.RecipeList.forEach(r=>{

            const itemName=getItemName(r.ItemID);
            if(!itemName.toLowerCase().includes(filter)) return;

            const card=document.createElement("div");
            card.className="card";

            let html=`
                <h2>${itemName}</h2>
                <h3>Upgrade To → ${getItemName(r.GradeupItemID)}</h3>
                <h3>Materials</h3>
            `;

            r.CraftMaterialList.forEach(mat=>{
                html+=`<div>${getItemName(mat.ItemId)} x${mat.Num}</div>`;
            });

            card.innerHTML=html;
            content.appendChild(card);
        });
    });
}
