const palindromes = function(str) {
    let reverseStr = '';

    for (let i = str.length-1; i >= 0; i--) {
        reverseStr += str[i];
    }

    let aString = str.replace(/[^a-zA-Z]/g, "").replace(" ", "").toLowerCase();
    let bString = reverseStr.replace(/[^a-zA-Z]/g, "").replace(" ", "").toLowerCase();

    return aString === bString ? true : false;
}

module.exports = palindromes
