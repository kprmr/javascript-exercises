const fibonacci = function(n) {

    n = Number(n)
    let num1 = 1;
    let num2 = 1;
    let fib = 0;
    let fibArr = [];
    fibArr.push(num1);
    fibArr.push(num2);
    if (n === 0) return fib;
    if (n < 0) return "OOPS"
    for (let i = 0; i < n; i++) {
        feb = num1 + num2;
        fibArr.push(feb);
        num1 = num2;
        num2 = feb;
    }
    return fibArr[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
