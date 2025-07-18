// brute force method

function maxSubArraySum(arr , window){
    let sum = 0;
    for(let i = 0 ; i < arr.length - window + 1 ; i++) {
        let tempSum = 0
        for (let j = i ; j < i + window ; j++) {
            tempSum = tempSum + arr[j]
        }
        if (tempSum > sum) {
            sum = tempSum;
        }
    }
    return sum;
}

// let resp = maxSubArraySum([1,2,5,2,8,1,5], 2) //10
let resp = maxSubArraySum([1,2,5,2,8,1,5], 4) // 17
console.log("this is response : ", resp);