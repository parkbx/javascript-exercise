const reverseString = function(string) {
    let storeString = string.split("");
    let reverseString = storeString.reverse();
    let returnArray = reverseString.join("");

    return returnArray;

};

module.exports = reverseString