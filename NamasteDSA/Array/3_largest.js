let arr = [3 ,5 ,8, 1, 0, -4, 99 , 54, 32 ,10, 101] // 99
let largest = arr[0];

function findLargest (arr) {
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] > largest) largest = arr[i]
    }
    
    return largest;
}

let response = findLargest (arr) ;
console.log("Largest : ", response);

/**  smallest */ 

// let arr = [3 ,5 ,8, 1, 0, -4, 99 , 54, 32 ,10, 101] // 99
let smallest = arr[0];

function findSmallest (arr) {
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] < smallest) smallest = arr[i]
    }
    
    return smallest;
}

let response1 = findSmallest (arr) ;
console.log("Smallest : ", response1);