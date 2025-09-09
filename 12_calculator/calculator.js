const add = function(num1, num2) {
	return num1+num2
};

const subtract = function(num1, num2) {
	return num1-num2
};

const sum = function(...args) {
  let sum = 0;
  if (Array.isArray(args[0])){
    let a = args[0];
    if (a.length === 0) {
      return 0;
    }
    const newArr = a.map(Number);
    for (let num of newArr) {
      sum = sum + num;
    }
  }
  else {
    for (let numb of args){
      sum = sum + numb;
    }
  }
  return sum;
};



const multiply = function(...args) {
  let product = 1;
  let a = args[0]
  const newArr = a.map(Number);
  for (let num of newArr) {
    product = product * num;
  }
  return product;
};

const power = function(x, n) {
  let result = 1;
	for (let i = 0; i< n; i++) {
    result = result * x
  }
  return result
};

const factorial = function(num) {
	let fact = 1;
  if (num === 0) return fact;
  for (num; num > 0; num--) {
    fact = fact * num
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
