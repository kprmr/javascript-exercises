const removeFromArray = function(arr, ...args) {
    let result = arr.filter(item => !args.includes(item));
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
