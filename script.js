"use strict";

// creation variable //
const buttonPrevious = document.querySelector(`.btn1`);
const buttonNext = document.querySelector(`.btn2`);

const li = document.querySelectorAll(`li`);

let position = 0;


// function nextImages //
function nextImage() {
    position++;

    if (position === li.length) {
        position = 0;
    }

    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove("active");
    }

     li[position].classList.add("active");

}

 

// functions buttons //
//buttonPrevious.addEventListener(`click`,previousImage);
buttonNext.addEventListener(`click`, nextImage);