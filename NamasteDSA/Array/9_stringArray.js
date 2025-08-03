// reverse a string in place with O(1) space complexity

let str = ["h" , "e" , "l" , "l" , "o"];
// console.log(str.reverse());     // one method 

// second method;
function reverseInPlace(str) {
    let i = 0;
    let j = str.length - 1;
    let temp;
    while ( i < j ) {
        // swap 
        temp = str[j];
        str[j] = str[i];
        str[i] = temp;
        i++;
        j--;
    }
    return str;
}

let response = reverseInPlace(str);
console.log(response);
