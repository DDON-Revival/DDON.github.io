async function fetchJSON(path){
    const res = await fetch(path);
    return await res.json();
}

async function fetchCSV(path){
    const res = await fetch(path);
    const text = await res.text();
    const lines = text.split("\n");
    return lines.map(line => line.split(","));
}

function createCard(title, subtitle){
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
        <h3>${title}</h3>
        <p>${subtitle}</p>
    `;
    return div;
}
