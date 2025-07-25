let arr = [5, 9, 7, 4, 2, 1, 8]

let first = Number.NEGATIVE_INFINITY;
let second = Number.NEGATIVE_INFINITY;

for (let i = 0 ; i < arr.length ; i ++) {

    if (arr[i] > first) {
        second = first;
        first = arr[i];
    }
    
    if (arr[i] > second && arr[i] < first) {
        second = arr[i]
    }
}

console.log(first) 
console.log(second) 