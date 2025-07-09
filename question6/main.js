const button = document.getElementById("sumButton");

button.addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("wow1").value);
  const num2 = parseFloat(document.getElementById("wow2").value);
  const resultSpan = document.getElementById("result");

  if (!isNaN(num1) && !isNaN(num2)) {
    resultSpan.textContent = num1 + num2;
  } else {
    resultSpan.textContent = "Invalid input";
  }
});