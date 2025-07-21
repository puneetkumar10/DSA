// sort the array 

// let arr = [12,4,6,1,4,3,7]

// let response = arr.sort((a,b) => a-b);
// console.log(response);

// for (let i = 0 ; i < arr.length - 1; i ++) {
//     let temp = 0
//     for (let j = i + 1 ; j < arr.length ; j++ ) {
//         if (arr[i] > arr [j]) {
//             // swap 
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log("after sorting : ", arr)


/** Put 0's to end with preserved order */
/** should be done in O(N) */

let arr1 = [4, 5, 0, 1, 9, 0, 5, 0];
let nonZeroIndex = 0;

for (let i = 0 ; i < arr1.length ; i ++) {
    if (arr1[i] != 0) {
        arr1[nonZeroIndex] = arr1[i];
        nonZeroIndex++;
    }
}

while (nonZeroIndex < arr1.length) {
    arr1[nonZeroIndex] = 0;
    nonZeroIndex++;
}

console.log(arr1);

// O (N+N) = O(N)
