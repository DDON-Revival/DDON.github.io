const content = document.getElementById("content");
const searchBox = document.getElementById("searchBox");
const tabs = document.querySelectorAll(".tabs button");

let currentTab = "monster";

/* =========================
   HELPERS
========================= */

function getItemName(id){
    const list = DATA.Items?.item;
    if (!list) return id;
    const f = list.find(i=>String(i.id)===String(id));
    return f ? f.new : id;
}

function getEnemyName(id){
    return DATA.Enemies?.[id] || id;
}

function getStageName(id){
    return DATA.Stages?.[id]?.en || id;
}

/* =========================
   TAB SWITCH
========================= */

tabs.forEach(btn=>{
    btn.addEventListener("click",()=>{
        tabs.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
        currentTab = btn.dataset.tab;
        renderHome();
    });
});

searchBox.addEventListener("input", renderHome);

/* =========================
   HOME RENDER
========================= */

function renderHome(){

    if (!window.dataLoaded) return;

    const value = searchBox.value.toLowerCase();

    if (currentTab==="monster") return renderMonsters(value);
    if (currentTab==="item") return renderItems(value);
    if (currentTab==="stage") return renderStages(value);
    if (currentTab==="shop") return renderShops(value);
    if (currentTab==="special") return renderSpecial(value);
    if (currentTab==="gathering") return renderGathering();
    if (currentTab==="crafting") return renderCrafting();
    if (currentTab==="craftingPlus") return renderCraftingPlus();
}

/* =========================
   MONSTERS
========================= */

function renderMonsters(filter=""){

    content.innerHTML="";

    const enemies = DATA.EnemySpawn.enemies;
    const map = new Map();

    enemies.forEach(e=>{
        const stage=e[0];
        const id=e[5];
        const lv=e[9];
        const drop=e[27];

        if(!map.has(id)){
            map.set(id,{stages:new Map(),drop});
        }

        if(!map.get(id).stages.has(stage)){
            map.get(id).stages.set(stage,new Set());
        }

        map.get(id).stages.get(stage).add(lv);
    });

    map.forEach((data,id)=>{

        const name=getEnemyName(id);
        if(!name.toLowerCase().includes(filter)) return;

        const card=document.createElement("div");
        card.className="card";

        let html=`<h2>${name}</h2>`;

        data.stages.forEach((levels,stageId)=>{
            const arr=[...levels].sort((a,b)=>a-b);
            const range=arr[0]===arr[arr.length-1]
                ?`Lv ${arr[0]}`
                :`Lv ${arr[0]}-${arr[arr.length-1]}`;

            html+=`<div>${getStageName(stageId)} (${range})</div>`;
        });

        html+=`<h3>Drops</h3>`;

        const table=DATA.EnemySpawn.dropsTables
            .find(d=>d.id==data.drop);

        if(table){
            table.items.forEach(i=>{
                html+=`<div>${getItemName(i[0])} - ${Math.round(i[5]*100)}%</div>`;
            });
        }

        card.innerHTML=html;
        content.appendChild(card);
    });
}

/* =========================
   ITEMS
========================= */

function renderItems(filter=""){

    content.innerHTML="";
    const list=DATA.Items.item;

    list.forEach(item=>{
        if(!item.new.toLowerCase().includes(filter)) return;

        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`<h2>${item.new}</h2>`;
        content.appendChild(card);
    });
}

/* =========================
   STAGES
========================= */

function renderStages(filter=""){

    content.innerHTML="";
    const stages=DATA.Stages;

    Object.keys(stages).forEach(id=>{
        const name=stages[id].en;
        if(!name.toLowerCase().includes(filter)) return;

        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`<h2>${name}</h2>`;
        content.appendChild(card);
    });
}

/* =========================
   SHOPS
========================= */

function renderShops(){

    content.innerHTML="";
    DATA.Shop.forEach(shop=>{
        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`<h2>Shop ${shop.ShopId}</h2>`;
        content.appendChild(card);
    });
}

/* =========================
   SPECIAL
========================= */

function renderSpecial(){
    content.innerHTML="";
    DATA.SpecialShops.shops.forEach(s=>{
        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`<h2>${s.shop_type}</h2>`;
        content.appendChild(card);
    });
}

/* =========================
   GATHERING
========================= */

function renderGathering(){

    content.innerHTML="";
    const rows=DATA.Gathering.slice(1);

    const card=document.createElement("div");
    card.className="card";

    let html="<h2>Gathering Items</h2>";

    rows.forEach(r=>{
        const stage=r[0];
        const item=r[4];
        html+=`<div>${getStageName(stage)} → ${getItemName(item)}</div>`;
    });

    card.innerHTML=html;
    content.appendChild(card);
}

/* =========================
   CRAFTING
========================= */

function renderCrafting(){

    content.innerHTML="";
    DATA.Crafting.forEach(cat=>{
        cat.RecipeList.forEach(r=>{
            const card=document.createElement("div");
            card.className="card";

            let html=`<h2>${getItemName(r.ItemID)}</h2>`;
            html+=`<h3>Materials</h3>`;

            r.CraftMaterialList.forEach(m=>{
                html+=`<div>${getItemName(m.ItemId)} x${m.Num}</div>`;
            });

            card.innerHTML=html;
            content.appendChild(card);
        });
    });
}

/* =========================
   CRAFTING+
========================= */

function renderCraftingPlus(){

    content.innerHTML="";
    DATA.CraftingPlus.forEach(cat=>{
        cat.RecipeList.forEach(r=>{
            const card=document.createElement("div");
            card.className="card";

            let html=`<h2>${getItemName(r.ItemID)} → ${getItemName(r.GradeupItemID)}</h2>`;
            html+=`<h3>Materials</h3>`;

            r.CraftMaterialList.forEach(m=>{
                html+=`<div>${getItemName(m.ItemId)} x${m.Num}</div>`;
            });

            card.innerHTML=html;
            content.appendChild(card);
        });
    });
}

/* =========================
   WAIT FOR DATA
========================= */

const wait=setInterval(()=>{
    if(window.dataLoaded){
        clearInterval(wait);
        renderHome();
    }
},100);
