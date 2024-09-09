const fibonacci = function(num) {
    num = Number(num)
    
    if (num === 0) {
        return 0
    } else if (num === 1) {
        return 1
    } else if (num < 0) {
        return "OOPS"
    }

    let n1 = 0
    let n2 = 1
    let nextNum = 0

    for (let i = 1; i < num ; i++){
        nextNum = n1 + n2
        n1 = n2
        n2 = nextNum
    }

    return nextNum
};

// Do not edit below this line
module.exports = fibonacci;
