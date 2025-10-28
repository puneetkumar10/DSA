/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = nums => {
    let len = nums.length, count = 0, prefix = 0;
    let suffix = nums.reduce((a, b) => a + b, 0);
    
    for (let i = 0; i < len; i++) {
        prefix += nums[i];
        suffix -= nums[i];
        if (nums[i] !== 0) continue;
        if (prefix === suffix) count += 2;
        if (Math.abs(prefix - suffix) === 1) count++;
    }
    
    return count;
};