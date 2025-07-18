let arr = [16,17,4,3,5,2];
let leader = [];
let status1 = false;
for (let i = 0 ; i < arr.length ; i ++) {
    status1 = false;
    for (let j = i+1 ; j < arr.length ; j ++) {
        if (arr[j] > arr[i]) {
            status1 = true;
          break;
        }
    } 
    if (status1) {
        continue;
    } else {
        leader.push(arr[i])
    }
}
console.log("aaaaa", leader)