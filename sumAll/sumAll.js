const sumAll = function(num1, num2) {
    
    let sum = 0;
    let num1Type = typeof(num1);
    let num2Type = typeof(num2);

    if (num1Type === "number" && num2Type === "number") {
        if (num1 >= 0 && num2 >= 0){
            if (num1 > num2) {
                for (let i = num2; i < num1+1; i++) {
                    sum += i;
                };
            } else {
                for (let i = num1; i < num2+1; i++) {
                    sum += i;
                };
            }
        } else {
            sum = "ERROR";
        }
    } else {
        sum = "ERROR";
    };

    return sum;

};

module.exports = sumAll
