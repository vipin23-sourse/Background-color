
"use strict";

const btn = document.querySelector('button');

const colors = ['#FBD148', '#E5890A', '#AA14F0'];

console.log(colors.length);

btn.addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
    document.querySelector('.currentColor').innerHTML = randomColor;

});

