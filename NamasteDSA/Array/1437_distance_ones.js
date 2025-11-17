/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var kLengthApart = function(nums, k) {
//   let ones = []
//   for (let i = 0 ; i < nums.length ; i ++) {
//     if (nums[i] == 1) {
//         ones.push(i)
//     }
//   } 
//   for (let j = 0 ; j < ones.length - 1 ; j++) {
//     if ((ones[j+1] - ones[j]) <= k) {
//         return false
//     }
//   }
//   return true
// };

var kLengthApart = function(nums, k) {
  let prev = -1; // index of previous 1

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (prev !== -1 && i - prev - 1 < k) {
        // not enough zeros between prev and current 1
        return false;
      }
      prev = i; // update last seen 1
    }
  }

  return true;
};
