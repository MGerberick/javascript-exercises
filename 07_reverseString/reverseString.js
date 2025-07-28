const reverseString = function(str) {
    const newStr = str.split('');
    newStr.reverse();
    return newStr.join('');
    //return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
