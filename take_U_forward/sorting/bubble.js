let nums = [7, 5, 2, 9, 10];
let temp = 0;

for (let i = 0 ; i < nums.length - 1; i++) {
    for (let j = 0 ; j < nums.length - i -1 ; j++) {
        if (nums[j] > nums[j+1]) {
            // swap
            temp = nums[j]
            nums[j] = nums[j+1]
            nums[j+1] = temp;
        }
    }
}

console.log(nums)