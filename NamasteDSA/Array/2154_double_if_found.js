/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let eleMap = {}
    let status = true
    for (let i = 0 ; i < nums.length ; i ++) {
        eleMap[nums[i]] = (eleMap[nums[i]] || 0) + 1
    }
    while (status) {
        if (eleMap.hasOwnProperty(original)) {
            original = original * 2
        } else {
            status = false
        }
    }
    return original
};