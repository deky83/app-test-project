var input = document.getElementById("number");

function minus(){
  var num = +input.value;//+ for convert from string to number
  num=num-5;
  input.value = num;
}

function plus(){
  var num = +input.value;//+ for convert from string to number
  num=num+5;
  input.value = num;
}

document.getElementById("minus").onclick = minus;
document.getElementById("plus").onclick = plus;