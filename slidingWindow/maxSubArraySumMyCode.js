function maxSubArraySum(arr , k) {
    let max = 0;
    let sum = 0;

    // finding sum of first 4 elements 
    for (let i = 0 ; i < k ; i ++) {
        sum = sum + arr[i];
    }
    max = sum;
    // iterate from i = 1 to i <= arr.length - k ; i ++ 

    for (let i = 1 ; i <= arr.length -k ; i++) {
        sum = sum - arr[i-1] + arr[i+k-1];
        if (sum > max) {
            max = sum
        }
    }
    console.log(max)
    return max;
}






let resp = maxSubArraySum([1,2,5,2,8,1,5], 4) // 17
console.log("this is response : ", resp);