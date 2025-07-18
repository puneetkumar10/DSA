let k=4

let arr = [1,4,2,10,23,3,1,0,20]


let max = 0; // 17
let sum = 0;


for (let i = 0 ; i < arr.length - k; i++) {
    for (let j = i ; j < i+k ; j ++) {
        sum = sum + arr[j];  // 1 + 4 + 2 + 10 = 17 
    }

    if (sum > max) {
        max = sum;
    }
    
    sum = 0 ;
}

console.log("result is : ", max);



