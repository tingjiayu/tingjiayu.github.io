// let a = 10;
// let b = 20;
// let c = a + b;
// console.log(c);
// a = 23;
// b = 34;
// c = a + b;
// console.log(c);

// function whatIsMyGrade(marks) {
//     if (marks > 80) {
//         //console.log("I got an HD");
//         return "HD";
//     } else if (marks < 40) {
//         //console.log("Sorry I failed");
//         return "Fail";
//     } else {
//         return "Pass";
//     }
// }

// let marks = 56;
// let grade = whatIsMyGrade(marks);
// console.log(grade);
// let total = add (a,b);
// console.log

const myButton = document.querySelector("#my-button");
console.log(myButton);
myButton.addEventListener("click".handleClick);
const topHeading = document.querySelector("h1");

const myCat = document.querySelector("my-cat");
console.log(myCat);
myCat.addEventListener("mouseenter", addMe);

myCat.addEventListener("mouseleave", removeMe);

function handleClick() {
  console.log("Hey did you just click me?");
  myCat.classList.to;
}

topHeading.textContent = "This is my new top heading";
topHeading.style.color = "red";

// console.log(topHeading);
// console.log(topHeading.textContent);

const header = document.querySelector("header");
console.log(header);
console.log(header.textContent);
console.log(header.innerHTML);
let course = "OART1013";
header.innerHTML += `<h1>my course is ${course} </h1>
<p> this is another para </p>`;
// console.log(header.innerHTML);

const allParas = document.querySelectorAll("p");
// console.log(allParas);
for (let i = 0; i < allParas.length; i++) {
  // console.log(allParas[i].textContent);
  allParas[i].style.border = "1px solid ";
  allParas[i].style.backgrounsColor = "beige";
}

const mySubHeading = document.querySelector("#first-subheading");
console.log(mySubHeading);
// console.log(mySubHeading.textContent);

const allSubHeading = document.querySelectorAll("h2");
console.log(allSubHeading);
for (let i = 0; i < allParas.length; i++) {
  console.log(allSubHeadings[i].textContent);
}
