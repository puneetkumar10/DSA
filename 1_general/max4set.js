let arr = [13,23,1,2,9,11,16,10,6,24,11,10,12]
let k = 4

let max = 0 
let sum = 0
let maxSet = []

for (let i = 0 ; i < arr.length - k + 1; i ++ ){
    let temp = []
    for (let j = i ; j < i+k ; j++) {
        sum = sum + arr[j]
        temp.push(arr[j])
    }
    if (sum > max) {
            maxSet = temp
            max = sum
            sum = 0
            temp = []
        } else {
            temp = []
            sum = 0
    }
}

console.log("maximum array set :", maxSet)
console.log("max sum is : ", max )