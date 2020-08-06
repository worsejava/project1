
var day = document.getElementById("day");

var currentDay = new Date().getDay();
console.log(currentDay);

function setDay(selectedDay){
  day.innerHTML = selectedDay
  day.style.color = 'white'
}

switch(currentDay){
  case 0:
    setDay("Sunday");
    break;
  case 1:
    setDay("Monday");
    break;
  case 2:
    setDay("Tuesday");
    break;
  case 3:
    setDay("Wednesday");
    break;
  case 4:
    setDay("Thursday");
    break;
  case 5:
    setDay("Friday");
  break;
  case 6:
    setDay("Saturday");
    break;
}

let myh1 = document.getElementById("0909");
function changeText(){
  myh1.innerHTML = (myh1.innerHTML == "click me") ? "got you lol" : "click me";
}