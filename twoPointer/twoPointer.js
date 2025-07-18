// two pointers 
// find first set of numbers where sum is zero
let arr = [-4, -3, -2, -1, 0, 1, 2, 5, 7];

let left = 0;
let right = arr.length - 1;
let found = false;
let resp = [];

while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
        resp.push(arr[left], arr[right]);
        found = true;
        break;
    } else if (sum > 0) {
        right--;
    } else {
        left++;
    }
}

if (found) {
    console.log("response is:", resp);
} else {
    console.log("no set with sum equals to 0");
}
