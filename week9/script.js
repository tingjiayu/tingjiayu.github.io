const myButton = document.querySelector("#my-button");

myButton.addEventListener("click", moveInput);

const myDuck = document.querySelector("#my-duck");

const myInput = document.querySelector("#my-input");

let clicked = false;

function moveInput() {
  if (clicked) {
    myInput.style, (translate = "10px 20px");
    clicked = false;
  } else {
    myInput.style.translate = "0px 0px";
    clicked == false;
  }
}
