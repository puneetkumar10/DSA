let arr = [1,3,0,5,0,6,0,0] // [1,3,5,6,0,0,0,0]

function moveZero(arr) {
    for (let i = 0 ; i < arr.length-1 ; i++) {
        if (arr[i] == 0) {
            // shifting logic 
            for (let j = i ; j < arr.length-1 ; j++) {
                arr[j] = arr[j+1]
            }
            arr[arr.length-1] = 0
        } else {
            continue
        }
    }
    return arr
}

console.log("response is : ", moveZero(arr))