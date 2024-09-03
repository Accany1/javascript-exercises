const sumAll = function(firstNum, lastNum) {
    if (firstNum < 0 || lastNum < 0 || firstNum%1 !== 0 || lastNum%1 !== 0 || typeof firstNum !== "number" || typeof lastNum !== "number"){
        return 'ERROR'
    }



    if (firstNum > lastNum){
        [firstNum,lastNum]=[lastNum,firstNum]
    }

    let finalNum = 0

    for (let i = firstNum; i <=lastNum; i++) {
        finalNum += i
    }

    return finalNum
};

// Do not edit below this line
module.exports = sumAll;
