// Author: Nilin Lay
// Date: 06/21/24
// INF651 Front End I Assignment 2
// For loop multiplication table

let myButton = document.querySelector("button");


myButton.onclick= () => {
    let num = prompt("Enter a number to multiply:")
    let rows = '';
    for( let counter = 1; counter < 11; counter++ ) {
        rows += '<tr' + `<td> ${num} x ${counter} = ${num*counter} </td>` + '</tr> <br>';
    }
    document.getElementById("table").innerHTML = rows;

}