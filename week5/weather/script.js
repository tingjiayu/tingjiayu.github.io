function checkWeather() {
  let myTemp = document.querySelector("#myTemp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  console.log(myTemp);
  let temp = myTemp.value;
  console.log(temp);
  if (temp < 10) {
    console.log("it is freezing");
    body.style.backgroundColor = "grey";
    outer.style.backgroundColor = "black";
  } else if (temp >= 20 && temp < 20) {
    console.log("nice and pleasant weather");
    body.style.backgroundColor = "blue";
    outer.style.backgroundColor = "black";
  } else if (temp >= 20 && temp < 35) {
    console.log("sunny and warm");
    body.style.backgroundColor = "blue";
    outer.style.backgroundColor = "black";
  } else if (temp > 35) {
    console.log("it is burning");
    body.style.backgroundColor = "blue";
    outer.style.backgroundColor = "black";
  }
}
