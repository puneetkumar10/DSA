/** LEETCODE 728
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let resp = []
    let tempNum;
    let isSD;
    for (let num = left ; num <= right ; num ++) {
        isSD = true;
        tempNum = []
        let numInStr = num.toString();
        tempNum = numInStr.split("")
        for (let i = 0 ; i < tempNum.length ; i++) {
            if (num % parseInt(tempNum[i]) != 0) {
                isSD = false
            }
        }
        if (isSD) {
            resp.push(num)
        }
    }
    return resp;
};