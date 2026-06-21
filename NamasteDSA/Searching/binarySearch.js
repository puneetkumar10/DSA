// binary search 
// array must be sorted

let nums = [3,5,8,10,23,56,77,89,112]
let target = 77

function binarySearch(nums , target) {
    let low = 0
    let high = nums.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high)/2)
        if (nums[mid] === target) {
            return `Element is present at : ${mid+1}`
        } else if (target > nums[mid]) {
            low = mid + 1          
        } else {
            high = mid -1 
        }
    }

    return "Element is not present"
}

console.log(binarySearch(nums, target))