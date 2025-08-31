const reverseString = function(line) {
    let arr = []
    arr = line.split('')
    let newArr = arr.reverse()
    let newLine = newArr.join('')
    return newLine
};

// Do not edit below this line
module.exports = reverseString;
