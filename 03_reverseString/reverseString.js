const reverseString = function(string) {
    let newStr = "";
    for(i = string.length - 1; i >= 0; i--)
        newStr += string[i];
    return newStr;
};


// Do not edit below this line
module.exports = reverseString;
