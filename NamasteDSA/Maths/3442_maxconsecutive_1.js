/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let eleMap = {}
    let oddMax = -Infinity
    let evenMax = Infinity
    for (let i = 0 ; i < s.length ;i ++) {
        eleMap[s[i]] = (eleMap[s[i]] || 0) + 1;
    }
    for (let ele in eleMap) {
        if ((eleMap[ele] > oddMax) && (eleMap[ele] % 2 == 1)) {
            oddMax = eleMap[ele]
        } else if ((eleMap[ele] < evenMax) && (eleMap[ele] % 2 == 0)) {
            evenMax = eleMap[ele]
        } else {
            continue;
        }
    }
    return oddMax - evenMax;
};