function calculateSquareCube() {
    const num = parseFloat(document.getElementById("number").value);
    if (isNaN(num)) {
      document.getElementById("result1").innerText = "Please enter a valid number.";
      return;
    }
    const square = num * num;
    const cube = num * num * num;
    document.getElementById("result1").innerText = `Square: ${square}, Cube: ${cube}`;
  }
  
  function calculateAverage() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    const num5 = parseFloat(document.getElementById("num5").value);
  
    if ([num1, num2, num3, num4, num5].some(isNaN)) {
      document.getElementById("result2").innerText = "Please enter valid numbers.";
      return;
    }
  
    const average = (num1 + num2 + num3 + num4 + num5) / 5;
    document.getElementById("result2").innerText = `Average: ${average}`;
  }
  