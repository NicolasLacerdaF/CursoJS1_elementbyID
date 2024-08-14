// function = A section of reusable code
//          declare code once, use it whenever you want.
//          call the funciton to execute that code


/* function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}`);
    console.log("Happy Birthday to you!");
    console.log(`Your are ${age} years old!`);
}

happyBirthday("BroCode", 23);
happyBirthday("Spongebob", 30);
happyBirthday("Patrick", 37); */


function add(x, y){
    return x + y;
}
function subtract(){
    return x - y;
}
function multiply(){
    return x * y;
}
function divide(){
    return x / y;
}
function divide(){
    return x / y;
}
function isEven(number){
   if(number % 2 === 0){
    return true;
   }
   else{
    return false;
   }

   // ou você pode escrever dessa forma: return number /2 === 0 ? true : false;
}
function isValidEmail(email){

    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
     // ou você pode escrever dessa forma: return email.includes("@") ? true : false;
}

console.log(isValidEmail("nicolaslacerdaa@gmail.com"));
console.log(isValidEmail("ELONMUSK.COM"));





