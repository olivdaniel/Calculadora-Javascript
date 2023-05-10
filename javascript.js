function add() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseFloat(num1) + parseFloat(num2);
    document.getElementById("result").innerHTML = "Resultado: " + result;
  }
  
  function subtract() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseFloat(num1) - parseFloat(num2);
    document.getElementById("result").innerHTML = "Resultado: " + result;
  }
  
  function multiply() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseFloat(num1) * parseFloat(num2);
    document.getElementById("result").innerHTML = "Resultado: " + result;
  }
  
  function divide() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (num2 == 0) {
      alert("Não é possível efetuar a divisão por zero");
      return;
    }
    var result = parseFloat(num1) / parseFloat(num2);
    document.getElementById("result").innerHTML = "Resultado: " + result;
  }
  