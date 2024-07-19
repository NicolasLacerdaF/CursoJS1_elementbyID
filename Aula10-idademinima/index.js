// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do somenthing else

/* 

let age = 18;
if(age >= 18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18+ to enter this site");
}


    */

/* 
let time = 9;

if(time < 12){
    console.log("Good morning!");
}
else{
    console.log("Good afternoon!");
}
*/ 

/* BOOLEANO
let isStudent = true;

if(isStudent){
    console.log("You are a student")
}
else{
    console.log("You are NOT a student!")
}
    */



/* BOOLEANO + VALOR
let age = 15;
let hasLicense = true;

if(age >= 16){
    console.log("You are old enough to drive");

        if(hasLicense){
            console.log("You have your license!");
        }
    else{
        console.log("You do not have your license yet")
    }
}


else{
    console.log("You must be 16+ to have a license to drive");
}
*/


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);
    console.log(age);
    if (isNaN(age)){
        alert("Your age must be a NUMBER", age)
        return
    } 
    resultElement.textContent = ``
    if( age >= 100){
        //console.log("You are TOO OLD to enter this site");
        resultElement.textContent = `You are TOO OLD to enter this site`;
    } else if(age == 0){
        //console.log("You cant't enter. You were just born."); 
        resultElement.textContent = `You can't enter. You were just born.`;
    } else if(age >= 18){
        //console.log("You are old enough to enter this site"); 
        resultElement.textContent = `You are old enough to enter this site`;
    } else if( age < 0){
        //console.log("Your age can't be below 0");
        resultElement.textContent = `Your age can't be below 0`;
    } else if(age < 18){
        //console.log("You must be 18+ to enter this site");
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
    
    

    

}

