const removeFromArray = function(inputArray, ...args) {
    const result = inputArray.filter(num => !args.includes(num))
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
