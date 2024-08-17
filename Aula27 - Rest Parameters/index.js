// rest parameters = (...rest) allow a funciton work with a variable 
//                             number of arguments by bunding them into an array

//                             spread = expands an array int seperate elements 
//                             rest = bundles seperate elements into an array

/*  FUNÇÃO PARA SABER OS ITENS DA GELADEIRA -- function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburguer";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);  */ 

function sum(...numbers){
    let result =  0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function getAvarage(...numbers){
    let result =  0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
    //média 
}

const total = getAvarage(75, 10, 85, 90, 50);

console.log(total);


/* function combinestrings(...strings){
    return strings.join(" ");
}


const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console. log(fullName); */