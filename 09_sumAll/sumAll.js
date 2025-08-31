const sumAll = function(x, y) {
    let sum = 0;
    let highNumber = Math.max(x, y);
    let lowNumber = Math.min(x, y);
    if (x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) return "ERROR"
    for (lowNumber; lowNumber <= highNumber; lowNumber++) {
        sum += lowNumber;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
