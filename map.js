const map = document.getElementById("map")
const mapImage = document.getElementById("mapImage")
const stageSelect = document.getElementById("stageSelect")
const tooltip = document.getElementById("tooltip")

let zoom = 1

async function loadStages(){

const stages = await fetch("https://api.ddon.org/api/stages")
.then(r=>r.json())

Object.entries(stages).forEach(([id,data])=>{

const opt = document.createElement("option")
opt.value = id
opt.textContent = data.en

stageSelect.appendChild(opt)

})

loadStage(1)

}

stageSelect.onchange = ()=>{
loadStage(stageSelect.value)
}

async function loadStage(stage){

const data = await fetch("https://api.ddon.org/api/map/"+stage)
.then(r=>r.json())

map.innerHTML=""

const img = document.createElement("img")

img.src = "/maps/"+data.map
img.id="mapImage"

map.appendChild(img)

data.spawns.forEach(s=>{

const marker = document.createElement("div")

marker.className="enemy-marker"

marker.style.left = s.x+"px"
marker.style.top = s.y+"px"

marker.onmouseenter=(e)=>{
tooltip.style.display="block"
tooltip.textContent = s.enemy+" Lv."+s.level
}

marker.onmousemove=(e)=>{
tooltip.style.left=e.pageX+10+"px"
tooltip.style.top=e.pageY+10+"px"
}

marker.onmouseleave=()=>{
tooltip.style.display="none"
}

map.appendChild(marker)

})

data.gathering.forEach(g=>{

const marker = document.createElement("div")

marker.className="gather-marker"

marker.style.left = g.x+"px"
marker.style.top = g.y+"px"

map.appendChild(marker)

})

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