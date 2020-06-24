"use strict";
function btnMy() {
  let car1 = document.form.car1.value;
  let car2 = document.form.car2.value;
  let car3 = document.form.car3.value;
  let result = 0;

  if (car1 === "Ferrari") {
    result++;
  }

  if (car2 === "Pagani") {
    result++;
  }

  if (car3 === "Bugatti") {
    result++;
  } else if (result === 0) {
    alert("Type the car name!");
  }

  let msg = [
    "Great Job!",
    "Pagani $2.8 million",
    "Ferrari $4 million",
    "Bugatti $19 million",
  ];
  let img = [
    "./img/ferrari.jpg",
    "./img/pagani.jpg",
    "./img/ferrari.jpg",
    "./img/bugatti.jpg",
  ];
  let range;
  //let store;

  if (result < 1) {
    range = 2;
  }

  if (result > 0 && result < 3) {
    range = 1;
  }

  if (result > 1) {
    range = 2;
  }

  document.querySelector("#after-submit").style.visibility = "visible";
  document.querySelector("#msg").innerHTML = msg[range];
  document.querySelector("#all-good").innerHTML =
    " You have got " + result + " found ";
  document.querySelector("#img").src = img[range];
}
