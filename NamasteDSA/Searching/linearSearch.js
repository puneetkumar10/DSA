// linear search

let nums = [10 ,6,3, 2, 7, 87]

let target = 7

console.log(linearSearch(nums, target));

function linearSearch(nums , target) {
    for (let i = 0 ; i < nums.length - 1 ;i++) {
        if (nums[i] == target) {
            return  `Element present at index : ${i+1}`
        }
    }
    return "Element not present in array"
}