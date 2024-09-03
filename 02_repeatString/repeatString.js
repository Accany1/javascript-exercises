const repeatString = function(string, repeats) {
    if (repeats < 0) {
        return 'ERROR'
    }
    
    let fullstring = ""
    for ( i = repeats; i > 0; i--) {
        fullstring += string
    }
    return fullstring
};

// Do not edit below this line
module.exports = repeatString;
