let arr = [0 , 1 ,2, 0 , 1 , 0 ,7 , 8, 9 , 0 , 6, 3, 2];

function removeDuplicates(arr) {
    let newArr = []
    let arrMap = {}

    for (let i = 0 ;  i < arr.length ; i++) {
        if (arrMap[arr[i]]) {
            arrMap[arr[i]] += 1
        } else {
            arrMap[arr[i]] = 1
            newArr.push(arr[i])
        }
    }
    return newArr;
}

let resp = removeDuplicates(arr) ; 
console.log(resp)

// /** LEETCODE 26
//  * @param {number[]} arr
//  * @return {number}
//  */
// var removeDuplicates = function(arr) {
//    let uniqEle = 0
//    for (let i = 0 ; i < arr.length ; i ++) {
//         if (arr[i] > arr[uniqEle]) {
//             uniqEle = uniqEle + 1;
//             arr[uniqEle] = arr[i]
//         }
//    }
//    return uniqEle + 1;
// };

/** LEETCODE 27
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let foundIndex = 0;
    for (let i = 0 ; i < nums.length ; i ++) {
        if (nums[i] !== val) {
            nums[foundIndex] = nums[i]
            foundIndex ++ ;
        }
    }
    return foundIndex
};