/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let eleMap = {}
    let max = 0;
    let currVal = 0
    let count = 0;
    for (let i = 0 ; i < nums.length ; i ++) {
        currVal = (eleMap[nums[i]] || 0) + 1
        eleMap[nums[i]] = currVal;
        if (currVal > max) {
            max = currVal
        }
    }
    for (let ele in eleMap) {
        if (eleMap[ele] == max) {
            count ++
        }
    }
    return count * max;
};