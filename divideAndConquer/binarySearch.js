// search in a sorted array 

function binarySearch(arr , toFind){
    let low = 0
    let high = arr.length-1 // 9
    let mid = Math.floor(( low + high )/2)

    let response = -1
    
    while (low <= high) {
        mid = Math.floor(( low + high )/2)
        if (toFind == arr[mid]) {
            response = mid;
            break;
        } else if (toFind > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return response;
}

let resp = binarySearch([1,4,7,14,19,23,29,55,98,103] , 103);
console.log("element found at position : ", resp);