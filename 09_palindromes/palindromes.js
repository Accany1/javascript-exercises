const palindromes = function (word) {
    let punctuation = /[\.,?!]/g;
    let newText = word.replace(punctuation, "");
    newText = newText.toLowerCase()
    newText = newText.replaceAll(' ', '')

    let splitString = newText.split('')
    let reversedString = splitString.reverse()
    let newString = reversedString.join("")

    if (newString === newText) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
