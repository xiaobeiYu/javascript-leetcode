/**
 * @param s: A string
 * @return: Whether the string is a valid palindrome
 */
const isPalindrome = function (str) {
    if(str === null || str.length === 0) {
        return true;
    }
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}