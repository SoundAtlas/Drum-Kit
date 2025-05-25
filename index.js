//preloading sounds
const sounds = {
  a: new Audio("sounds/Kick.wav"),
  s: new Audio("sounds/snare.mp3"),
  d: new Audio("sounds/crash.mp3"),
  h: new Audio("sounds/tom-1.mp3"),
  j: new Audio("sounds/tom-2.mp3"),
  k: new Audio("sounds/tom-3.mp3"),
  l: new Audio("sounds/tom-4.mp3"),
};

//Detecting button press

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting keyboard press

document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      var kick = new Audio("sounds/Kick.wav");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "h":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
