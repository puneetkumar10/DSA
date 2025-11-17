/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  let ones = []
  for (let i = 0 ; i < nums.length ; i ++) {
    if (nums[i] == 1) {
        ones.push(i)
    }
  } 
  for (let j = 0 ; j < ones.length - 1 ; j++) {
    if ((ones[j+1] - ones[j]) <= k) {
        return false
    }
  }
  return true
};