let displayValue = "";

const display = document.getElementById("display");

function appendNumber(number) {
  if (displayValue === "0" && number === "0") {
    return;
  } else if (displayValue === "0" && number !== "0") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  display.value = displayValue;
}

function appendOperator(operator) {
  if (operator === "." && displayValue.includes(".") && !isNaN(displayValue)) {
    return;
  } else {
    displayValue += operator;
  }
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  display.value = displayValue;
}

function calculate() {
  const ops = ["+", "-", "*", "/"];
  try {
    if (/[+\-*/]{3,}/.test(displayValue)) {
      displayValue = displayValue.replace(/([+\-*/])+/g, (_, p1) => p1);
    }
    if (/[+\-*/]{2,}/.test(displayValue)) {
      displayValue = displayValue.replace(/([+\*/])+/g, (_, p1) => p1);
    }
    console.log("expression:", displayValue);
    displayValue = eval(displayValue);
    console.log("result:", displayValue);
    display.value = displayValue;
  } catch (error) {
    display.value = "Error";
  }
}
