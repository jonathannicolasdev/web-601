console.log("script.js");

function getHistory() {
  return document.getElementById("history-value").innerText;
}

alert(getHistory());

function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}
function getOutput() {
  return document.getElementById("output-value").innerText;
}
function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}

printOutput("5555");

function getFormattedNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

console.log(getFormattedNumber("7888"));

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

let revNum = reverseNumberFormat("9,999");
console.log(revNum);

printOutput("9089332");
alert(reverseNumberFormat(getOutput()));

let operator = document.getElementsByClassName("operator");

console.log("these are the operator buttons", operator);

console.log(operator);
console.log(operator.length);
//             0         1         2
let fruits = ["apple", "orange", "banana"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);

for (var i = 0; i < fruits.length; i++) {
  console.log(fruit[i]);
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    alert("The oprator clicked:" + this.id);
  });
}
