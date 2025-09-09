const palindromes = function (str) {
    let str1 = str.replaceAll(" ", "").toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    let rev = str1.split('').reverse().join('')  ;
    if (rev === str1) {
        return true
    }
    else return false
};

// Do not edit below this line
module.exports = palindromes;
