
"use strict";

const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('button');

btn.addEventListener("click", function(){
    let hexColor = "#";
    
    for (let i = 0; i < 6; i++) {
        hexColor += hexColors[getRandomNum()];
        console.log(hexColor);
        
    }
    document.body.style.background = hexColor;
    document.querySelector('.currentColor').innerHTML = hexColor;
})


function getRandomNum(){
    return Math.floor(Math.random() * hexColors.length)
}

console.log(getRandomNum());
