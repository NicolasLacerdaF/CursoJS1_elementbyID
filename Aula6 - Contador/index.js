// PROGRAMA DE CONTADOR

const reduzirBtn = document.getElementById("reduzirBtn");
const limparBtn = document.getElementById("limparBtn");
const aumentarBtn = document.getElementById("aumentarBtn");

const countLabel = document.getElementById("countLabel");
let count = 0;

aumentarBtn.onclick = function(){
    count++;
    countLabel.textContent= count;
}

limparBtn.onclick = function(){
    count = 0;
    countLabel.textContent= count;
}

reduzirBtn.onclick = function(){
    count--;
    countLabel.textContent= count;
}