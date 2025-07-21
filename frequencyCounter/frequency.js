// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

const resp = sameFrequency(182,281) // true
console.log(resp);
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

/**
 1. convert them into strings
 2. Map array elements to obj 
 3. Loop over array elements and check its values for both 
 */

function sameFrequency(value1 , value2) {
    let val1Str = value1.toString();
    let val2Str = value2.toString();

    if (val1Str.length !== val2Str.length) {
        return false;
    }
    let val1Obj = {}
    let val2Obj = {}

    for (let ele of val1Str) {
        val1Obj[ele] = (val1Obj[ele] || 0) + 1;
    }
    for (let ele of val2Str) {
        val2Obj[ele] = (val2Obj[ele] || 0) + 1;
    }
    
    for (let ele in val1Obj) {
        if (val1Obj[ele] != val2Obj[ele]) {
            return false;
        }
    }
    return true;
}