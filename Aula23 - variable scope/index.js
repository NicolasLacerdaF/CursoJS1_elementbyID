// variable scope = whare a variable is recognized
//                  and accessible (local vs global)
//local é quando a variavel consta dentro da função
//global é quando a variavel consta apenas por fora, sendo inserida em todas as funções

let x = 3;

function1();

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

