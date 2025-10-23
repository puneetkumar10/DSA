/** MY ATTEMPT - WORKS 100% CAN BE IMPROVED
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    let tempNum = ""
    while (s.length > 2) {
        for (let i = 0 ;i < s.length - 1 ; i++) {
            tempNum += (parseInt(s[i]) + parseInt(s[i+1])) % 10
        }
        s = tempNum
        tempNum = ""
    } 
    if (s.length == 2 && (s[0] == s[1])) {
        return true
    }
    return false;
};