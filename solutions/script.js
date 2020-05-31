console.log("script.js");

function getHistory() {
  console.log(document.getElementById("history-value"));
  return document.getElementById("history-value").innerText;
}

alert(getHistory());
