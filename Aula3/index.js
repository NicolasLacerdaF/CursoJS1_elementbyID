//How to accept user input 

// 1. EASY WAY = windows prompt 
// 2. PROFESSIONAL WAY = HTML textbox

/*let username; EASY WAY

username = window.prompt("What's your username?");

console.log(username);
*/

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Olá ${username}`




}