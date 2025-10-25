/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function(n) {
    let i = n + 1;
    while (true) {
        let numStr = String(i)
        let numMap = {}
        let invalid = false;
        for (let k = 0 ; k < numStr.length ; k++) {
            if (numMap[numStr[k]]) {
                numMap[numStr[k]] = numMap[numStr[k]] + 1;
            } else {
                numMap[numStr[k]] = 1;
            }
        }
        for (let p in numMap) {
            if (parseInt(p) != numMap[p]) {
                invalid = true;
                break;
            } 
        }
        if (invalid) {
             i++;
        } else {
            return parseInt(numStr); // or "return i"
        }
    }
};
