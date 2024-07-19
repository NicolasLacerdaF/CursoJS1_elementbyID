// Operação ternária é um atalho pro if{} e else{}
// ajuda a designar uma variavel baseada em condições
//condião ? codeIFVerdade : codeIfFalso;

//RESUMO: ISTO OU AQUILO


//let age = 21;
//let message = age >= 18 ? "You are an adult" : "You are an minor";
//console.log(message);


//let time = 16;
//let greeting =  time < 12 ? "Good morning" :  "Good afternoon";
//console.log(greeting)

//let isStudent = true;
//let message = isStudent ? "You are a student" :  "You are NOT a student";
//console.log(message);

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`)