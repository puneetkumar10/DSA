// Given an array  A  of size  N . You have to find the minimal non-negative element that is not present in the array. Assume 0 as a positive number


// Inputs = [
// [0,1,2,3,4], -> 5 
// [0,1,2,3,4,7] -> 5
// [0,2,3,4,7] -> 1 
// [1,2,3,4,7, 0] -> 5
// [-1,2,3,4,7,1] -> 0
// [0, 1, 7, 8, 9,] -> 2
// [9, 8 , 7, 0] -> 1
// ]
// [-1, 0, 7, 8, 9 ]

// [1,2,9]
// O (N+N) = O (N)
var findNonNegative = function(nums) {
    let objectMap = {}
    
    for (let i = 0 ; i < nums.length ; i ++) {
        if (objectMap.hasOwnProperty(nums[i])) {
            objectMap[nums[i]] = objectMap[nums[i]] + 1;
        } else {
            objectMap[nums[i]] = 1;
        }
    }

    // filtering out O(1)
    let allTraversed = true;
    for (let j = 1 ; j <= nums.length ; j ++ ) {
        if (objectMap.hasOwnProperty(j)) {
            continue;
        } else {
            return j;
        }
    }
    if (allTraversed) {
        return nums.length + 1;
    }
};

// let response = findNonNegative([-1 , 9, 8 , 7, 0 ]); // 1
// let response = findNonNegative([0,1,2,3,4,7]); // 5 
// let response = findNonNegative([0,1,2,3,4]);    // 5
// let response = findNonNegative([-1,2,3,4,7,1]);     // 0
// let response = findNonNegative([9, 8 , 7, 0]);      // 1
// let response = findNonNegative([0,1,2,3,4,6]);     // 5
// let response = findNonNegative([101]);     // 0
let response = findNonNegative([3,4,-1,1]); // 2



console.log(response);


