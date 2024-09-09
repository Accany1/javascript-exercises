const add = function(first,second) {
	return first + second
};

const subtract = function(first,second) {
	return first - second
};

const sum = function(array) {
	return array.reduce((sum,current) => sum + current,0)
};

const multiply = function(array) {
  return array.reduce((sum,current) => sum * current)
};

const power = function(first,second) {
	return first ** second
};

const factorial = function(num) {
	if (num === 0 || num === 1){
    return 1
  }

  for (let i = num - 1; i >= 1; i --) {
    num = num * i
  }

  return num
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
