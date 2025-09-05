const arr = [1, 2, 3];

for (let start = 0; start < arr.length; start++) {
  for (let end = start; end < arr.length; end++) {
    const subarray = arr.slice(start, end + 1);
    console.log(subarray);
  }
}


// function maxSubArray(nums) {
//   let current = nums[0];
//   let best = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     current = Math.max(nums[i], current + nums[i]);
//     best = Math.max(best, current);
//   }
//   return best;
// }

// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// module.exports = maxSubArray;