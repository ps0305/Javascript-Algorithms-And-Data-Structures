var res = document.getElementById('res')

document.getElementById('btn0').onclick = () => {
  res.innerHTML += '0';
}

document.getElementById('btn1').onclick = () => {
  res.innerHTML += '1';
}

document.getElementById('btnClr').onclick = () => {
  res.innerHTML = '';
}

document.getElementById('btnEql').onclick = () => {
  var equation = res.innerHTML;
  equation = equation.split(/(\+|-|\*|\/)/);
  var operand1 = parseInt(equation[0], 2);
  var operator = equation[1];
  var operand2 = parseInt(equation[2], 2);
  let result;

  switch (operator){
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "*":
      result = operand1 * operand2;
      break;
    case "/":
      result = operand1 / operand2;
      break;
  }

  res.innerHTML = result.toString(2);
}

document.getElementById('btnSum').onclick = () => {
  res.innerHTML += '+';
}

document.getElementById('btnSub').onclick = () => {
  res.innerHTML += '-';
}

document.getElementById('btnMul').onclick = () => {
  res.innerHTML += '*';
}

document.getElementById('btnDiv').onclick = () => {
  res.innerHTML += '/';
}