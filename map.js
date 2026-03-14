const map = document.getElementById("map")
const stageSelect = document.getElementById("stageSelect")
const tooltip = document.getElementById("tooltip")

let zoom = 1

async function loadStages(){

const stages = await fetch("https://api.ddon.org/api/stages")
.then(r=>r.json())

Object.entries(stages)
.sort((a,b)=>Number(a[0]) - Number(b[0]))
.forEach(([id,data])=>{

const opt = document.createElement("option")
opt.value = id
opt.textContent = data.en

stageSelect.appendChild(opt)

})

stageSelect.value = 100
loadStage(100)

}

stageSelect.onchange = ()=>loadStage(Number(stageSelect.value))

async function loadStage(stage){

const data = await fetch("https://api.ddon.org/api/map/"+stage)
.then(r=>r.json())

map.innerHTML=""

const img = document.createElement("img")
if(!data.map){
console.log("NO MAP:", data)
return
}

img.src = "https://api.ddon.org/maps/"+data.map

map.appendChild(img)

img.onload = ()=>{

const scale = img.clientWidth / 4096

// ENEMIES
if(data.spawns){

data.spawns.forEach(s=>{

const marker = document.createElement("div")
marker.className="enemy-marker"
marker.style.position="absolute"

marker.style.left = (s.x * scale) + "px"
marker.style.top  = (s.y * scale) + "px"

marker.onmouseenter=(e)=>{
tooltip.style.display="block"
tooltip.textContent = s.enemy+" Lv."+s.level
}

marker.onmousemove=(e)=>{
tooltip.style.left=(e.pageX+10)+"px"
tooltip.style.top=(e.pageY+10)+"px"
}

marker.onmouseleave=()=>{
tooltip.style.display="none"
}

map.appendChild(marker)

})

}

// GATHERING
if(data.gathering){

data.gathering.forEach(g=>{

const marker = document.createElement("div")
marker.className="gather-marker"
marker.style.position="absolute"

marker.style.left = (g.x * scale)+"px"
marker.style.top  = (g.y * scale)+"px"

map.appendChild(marker)

})

}

}

}

function zoomIn(){
zoom+=0.1
map.style.transform="scale("+zoom+")"
}

function zoomOut(){
zoom-=0.1
map.style.transform="scale("+zoom+")"
}

loadStages()