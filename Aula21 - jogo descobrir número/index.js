//NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

console.log(answer);

//randomizador de 1 a 100

let attemps = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    console.log(typeof guess, guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attemps++;
        if(guess < answer){
            window.alert("Too low!Try Again");
        }
        else if(guess > answer){
            window.alert("Too High!Try Again");
        }
        else{
            window.alert(`Correct!! The answer was ${answer}. It took you ${attemps} attemps`);
        }
    }
}
