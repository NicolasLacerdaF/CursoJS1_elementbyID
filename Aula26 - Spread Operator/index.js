// spread operator = " ... "allows an iterable such as an(SÃO 3 PONTOS)
//              array or string to be expanded
//              into separade elements
//              (unpacks the elements)

/* let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);EXEMPLO DE SPREAD NUMÉRICO */ 

/* let username = "Nicolas Lacerda";
let letters = [...username].join("-");

console.log(letters); EXEMPLO EM LETRAS */

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots","celery","potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);

