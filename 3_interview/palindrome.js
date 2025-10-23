/** LEETCODE 9
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let numStr = x.toString();
    let strRev = numStr.split("").reverse().join("");
    if (numStr === strRev) {
        return true
    } else {
        return false
    }
};
