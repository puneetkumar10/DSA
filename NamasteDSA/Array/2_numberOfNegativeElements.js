// count number of negatives in an array 

let arr = [4 , 6, 7, -1, -5, 5, -5, 9, -20 , 0]; // output 4
let count = 0;

for (let i = 0 ; i < arr.length ; i ++) {
    if (arr[i] < 0) count ++ ;
}

console.log(count);

