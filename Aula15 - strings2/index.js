// string slicing = creating a substring   
//                    from a portion of another String

//                    string.slice(start, end)

const email = "nicolaslacerdaanickolichata@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log(username);
console.log(extension);


//let firstName = fullName.slice(0, 7);
//let lastName = fullName.slice(8, 15);

//let firstChar = fullName.slice(0, 1);
//let lastChar = fullName.slice(-1);

/***********const fullName = "Nicolas Lacerda Franco";

let firstName = fullName.slice(0, fullName.indexOf(" "));

let middleName = fullName.slice(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));

let lastName = fullName.slice(fullName.lastIndexOf(" ") + 1);// Extrair o nome do meio entre o primeiro e o último espaço

console.log(firstName);
console.log(middleName);
console.log(lastName);**********/