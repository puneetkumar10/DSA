/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
// var findFinalValue = function(nums, original) {
//     let eleMap = {}
//     let status = true
//     for (let i = 0 ; i < nums.length ; i ++) {
//         eleMap[nums[i]] = (eleMap[nums[i]] || 0) + 1
//     }
//     while (status) {
//         if (eleMap.hasOwnProperty(original)) {
//             original = original * 2
//         } else {
//             status = false
//         }
//     }
//     return original
// };

var findFinalValue = function(nums, original) {
  const set = new Set(nums);
  while (set.has(original)) {
    original *= 2;
  }
  return original;
};