//sliding window approach

function maxSubArraySum(arr, window) {
    if (arr.length < window) return null;

    let sum = 0;
    for (let i = 0; i < window; i++) {
        sum += arr[i];
    }

    let tempSum = sum;

    for (let i = window; i < arr.length; i++) {
        tempSum = tempSum - arr[i - window] + arr[i];
        sum = Math.max(sum, tempSum);
    }

    return sum;
}

// let resp = maxSubArraySum([1,2,5,2,8,1,5], 2) //10
let resp = maxSubArraySum([1,2,5,2,8,1,5], 4) // 17
console.log("this is response : ", resp);