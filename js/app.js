function btnMy() {
  let quest1 = document.form.quest1.value;
  let quest2 = document.form.quest2.value;
  let quest3 = document.form.quest3.value;
  let correct = 0;

  if (quest1 == "Country") {
    correct++;
  }

  if (quest2 == "Paris") {
    correct++;
  }

  if (quest3 == "Spain") {
    correct++;
  }
  let msg = ["Great Job!", "Thats just okay", "You need to do better"];
  let img = [
    "https://media.tenor.com/images/615be83b1a316574a6ea429f0fa2f69f/tenor.gif",
    "./img/pic2.gif",
    "./img/pic3.gif",
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
