let arr = [4, 2 ,0 ,10 , 8, 30];
let ele = 10;

function searchElement (arr , ele) {
    for (let i = 0 ; i < arr.length ; i++ ) {
        if (arr[i] == ele) {
            return i;
        }
    } 
    return -1
}

let response = searchElement(arr , ele) ; 
console.log(response);