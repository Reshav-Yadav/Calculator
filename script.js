const display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;

    // Convert % to /100
    expression = expression.replace(/(\d+(\.\d+)?)%/g, '($1/100)');

    // Evaluate the expression safely
    let result = eval(expression);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}
document.addEventListener("keydown", function (e) {
  const allowedKeys = "0123456789+-*/().^%";

  if (allowedKeys.includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});