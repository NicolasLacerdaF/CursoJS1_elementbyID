//Método Chaining = Como chamar um método depois de outro 
//                  em uma linha contínua de código

//---- sem método:
                    
/*let username = window.prompt("Enter your username:");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);*/


//---- COM método: 

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);