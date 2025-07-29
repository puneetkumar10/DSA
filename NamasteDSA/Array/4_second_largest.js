/** Find second largest in array */

let arr = [4, 9 ,0 ,2 ,8, 7 ,1];
let first = 0;
let second = 0;

for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] > first) {
        second = first;
        first = arr[i];
    }
    if (arr[i] > second && arr[i] < first) {
        second = arr[i]
    }
}

console.log("largest is : " , first)
console.log("second largest is : " , second)
