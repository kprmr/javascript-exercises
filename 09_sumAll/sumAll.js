const sumAll = function(x, y) {
    let sum = 0;
    if (x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) return "ERROR"
    if (x < y) {
        for (x; x <= y; x++){
            sum = sum + x;
        }
    }
    else if (x > y) {
        for (y; y <= x; y++){
            sum = sum + y;
        }
  }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
