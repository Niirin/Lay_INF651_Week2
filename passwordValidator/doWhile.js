// Author: Nilin Lay
// Date: 06/21/24
// INF651 Front End I Assignment 2
// Do-while password checker

let messageh1 = document.querySelector("h1");
let myButton = document.querySelector("button");
let pw, confirmPw;

myButton.onclick= () => {
    do {
        pw = prompt("Enter your password:");
        // console.log(pw);
        confirmPw = prompt("Enter again to confirm your password:");
        // console.log(confirmPw);
    } while (pw != confirmPw);
    messageh1.textContent= "Passwords matched. Thank you for using our password checker!"
    myButton.style.display= "none";
} 