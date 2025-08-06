/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let eleMap = {}

    for (let i = 0 ; i < nums.length ; i ++) {
        eleMap[nums[i]] = (eleMap[nums[i]] || 0) + 1;
    }

    for (let ele in eleMap) {
        if (eleMap[ele] == 1) return parseInt(ele);
    }
};