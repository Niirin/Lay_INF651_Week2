// Author: Nilin Lay
// Date: 06/21/24
// INF651 Front End I Assignment 2
// While loop Guessing Game

let randomNum = Math.floor(Math.random() * 10) + 1;
//console.log(randomNum);

let messageh1 = document.querySelector("h1");
let messageh2 = document.querySelector("h2");
let myButton = document.querySelector("button");

myButton.onclick= () => {
    let x = prompt("Guess a number from 1 - 10:");
    let game = true;
    while (game) {
       x = prompt("Your guess is not correct!");
       if (x== randomNum) {
            messageh1.textContent = "Congratulations! You Won!";
            messageh2.textContent = `Your guess of ${x} is correct!`
            randomNum = Math.floor(Math.random() * 10) + 1;
            myButton.style.display= "none";
            game = false;
       }
    }
}
