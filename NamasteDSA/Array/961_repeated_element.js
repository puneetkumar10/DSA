/** Leetcode 961
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let eleMap = {}

    for (let i = 0 ; i < nums.length ; i++) {
        if (eleMap[nums[i]]) {
            return nums[i]
        } else {
            eleMap[nums[i]] = 1
        }
    }
};