let nums = [7, 5, 2, 9, 10];
let temp = 0;
for (let i = 0; i < nums.length - 1; i++) {
  for (let j = i; j < nums.length; j++) {
    if (nums[i] > nums[j]) {
      // swap
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
  }
}
console.log(nums);
