// Leetcode 2348. Number of Zero-Filled Subarrays

// My attempt -> Works fine but TLE for very very long arrays because of O(n^3)

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0;
    let tempStatus = false;
    // get all subarrays
    for (let i = 0 ; i < nums.length ; i++) {
        for (let j = i ; j < nums.length ; j++) {
            let subarray = nums.slice(i , j+1);
            tempStatus = true;
            // iterate every subarray and check all elements must be zero 
            // if all zero count++
            for (let k = 0 ; k < subarray.length ; k ++) {
                if (subarray[k] != 0) {
                    tempStatus = false;
                    break;
                } 
            }
            if (tempStatus) {
                count++;
            }
        }
    }
    return count;
};