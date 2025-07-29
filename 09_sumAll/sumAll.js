const sumAll = function(num1, num2) {
    // console.log(num1, num2);
    switch(true) {
        case (num1 < 0 || num2 < 0):
        case (Math.floor(num1) != num1 || Math.floor(num2) != num2):
        case (typeof num1 != "number" || typeof num2 != "number"):
         return "ERROR";
    };
    let newNum = 0;
    let a=0;
    let b=0;
    if(num1>num2){a=num2; b=num1} else {a=num1; b=num2}
    for (i = a; i <= b; i++) {
        newNum += i;
    };
    return newNum;

};

// Do not edit below this line
module.exports = sumAll;
