/**
 * @param {number[]} nums
 * @return {number}
 */

 /** 
var maxAdjacentDistance = function(nums) {
    let maxDiff = -Infinity
    let maxDiff2 = -Infinity
    for (let i = 0 ; i < nums.length - 1 ; i++) {
        if ((nums[i+1] - nums[i]) > maxDiff) {
            maxDiff = nums[i+1] - nums[i]
        }
        if ((nums[i] - nums[i+1]) > maxDiff2) {
            maxDiff2 = nums[i] - nums[i+1]
        }
    }

    if ((nums[nums.length - 1] - nums[0]) > maxDiff) {
        maxDiff = nums[nums.length - 1] - nums[0]
    }
    if ((nums[0] - nums[nums.length - 1]) > maxDiff2) {
        maxDiff2 = nums[0] - nums[nums.length - 1]
    }
    if (maxDiff2 > maxDiff) {
        return maxDiff2
    } else {
        return maxDiff
    }
};
*/

function maxAdjacentDistance(nums) {
  const n = nums.length;
  if (n < 2) return 0;

  let max = 0;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;               
    const diff = Math.abs(nums[j] - nums[i]);
    if (diff > max) max = diff;
  }
  return max;
}