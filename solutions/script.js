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

function getFormattedNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

printOutput("9089332");
alert(reverseNumberFormat(getOutput()));

let operator = document.getElementsByClassName("operator");
console.log(operator);
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    alert("The oprator clicked:" + this.id);
  });
}
