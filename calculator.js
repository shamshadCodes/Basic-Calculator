let display = document.getElementById("display");
let currentNum = "";

function displayNum(num) {
  currentNum += num;
  display.value = currentNum;
}

function clearDisplay() {
  currentNum = "";
  display.value = currentNum;
}

function calculate() {
  let result = eval(currentNum);
  display.value = result;
}
