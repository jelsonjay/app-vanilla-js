"use strict";
function btnMy() {
  let car1 = document.form.car1.value;
  let car2 = document.form.car2.value;
  let car3 = document.form.car3.value;
  let correct = 0;

  if (car1 === "Bugatti") {
    correct++;
  }

  if (car2 === "Pagani") {
    correct++;
  }

  if (car3 === "Bugatti") {
    correct++;
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

  if (correct < 1) {
    range = 2;
  }

  if (correct > 0 && correct < 3) {
    range = 1;
  }

  if (correct > 1) {
    range = 0;
  }

  document.querySelector("#after-submit").style.visibility = "visible";
  document.querySelector("#msg").innerHTML = msg[range];
  document.querySelector("#all-good").innerHTML =
    " You have got " + correct + " correct ";
  document.querySelector("#img").src = img[range];
}
