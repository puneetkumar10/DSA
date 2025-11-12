/** LEETCODE 922
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let evenArr = []
    let oddArr = []
    for (let i = 0 ; i < nums.length ; i ++) {
        nums[i] % 2 == 0 ? evenArr.push(nums[i]) : oddArr.push(nums[i]);
    }
    let evenIndex = 0
    let oddIndex = 0
    for (let j = 0 ; j < nums.length ; j++) {
        if (j % 2 == 0) {
            nums[j] = evenArr[evenIndex]
            evenIndex++
        } else {
            nums[j] = oddArr[oddIndex]
            oddIndex++
        }
    }
    return nums
};