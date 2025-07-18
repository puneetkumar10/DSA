// find number of unique values in the array
let arr = [1,1,1,2,3,3,4,4,4,5,6,6,7,8,9] // 9 output
// let resp = 0

// if (arr.length == 0) {
//     resp = 0
// } else if (arr.length == 1) {
//     resp = 1
// } else {
//     resp = 1;
//     for (let i = 0 ; i < arr.length-1 ; i ++) {
//         if(arr[i] == arr[i+1]) {
//             continue;
//         } else {
//             resp++
//         }
//     }
// }

// console.log(resp)


function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let i = 0; // first pointer — tracks position of last unique value

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]; // optional: overwrite to build array of uniques
        }
    }

    return i + 1; // total unique values
}

const response = countUniqueValues(arr);
console.log("response is : ", response);
