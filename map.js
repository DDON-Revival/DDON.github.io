const API = "https://api.ddon.org/api"

let stages = {}

async function init(){

const res = await fetch(API + "/stages")
stages = await res.json()

const select = document.getElementById("stageSelect")

Object.keys(stages).forEach(id=>{

const opt = document.createElement("option")

opt.value = id
opt.textContent = stages[id].en || id

select.appendChild(opt)

})

select.onchange = ()=>loadStage(select.value)

loadStage(Object.keys(stages)[0])

}

async function loadStage(stageId){

const mapImage = document.getElementById("mapImage")

mapImage.src =
"/maps/field000_m00_l0.png" // später dynamisch

loadSpawns(stageId)

}

async function loadSpawns(stageId){

const res = await fetch(API + "/spawns/" + stageId)
const spawns = await res.json()

const container = document.getElementById("mapContainer")

document.querySelectorAll(".marker").forEach(e=>e.remove())

spawns.forEach(s=>{

const marker = document.createElement("div")

marker.className = "marker"

const gridX = s.pos % 64
const gridY = Math.floor(s.pos / 64)

marker.style.left = (gridX/64*100)+"%"
marker.style.top = (gridY/64*100)+"%"

marker.title = "Enemy " + s.enemyId + " Lv " + s.level

container.appendChild(marker)

})

}

init()