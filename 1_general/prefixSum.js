let arr = [16,17,4,3,5,2];
// sum of prefix
let total = 0

for (let i = 0 ; i < arr.length ; i++ ) {
    total = total + arr[i]
    if (i == 0 ) {
        continue;
    } else {
        arr[i] = total;
    }
}

console.log(arr)

