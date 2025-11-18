/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let eleMap = {}
    let resp = []
    for (let i = 0 ; i < nums.length ; i ++) {
        eleMap[nums[i]] = (eleMap[nums[i]] || 0) + 1;
    }
    for (let ele in eleMap) {
        if (eleMap[ele] >= 2) {
            resp.push(parseInt(ele))
        }
    }
    return resp
};