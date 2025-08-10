// count number of digits
let num = 2590097;
function countDigits(number) {
    let count = 0 ;
    while (number >= 10) {
        number = Math.trunc(number/10);
        count++;
    }
    return count + 1;
}

let response = countDigits(num);
console.log("number of digits are : ", response);


// palindrome
let num1 = 12213;
let original = num1;
let reverse = 0;
while (num1 > 0) {
    let digit = num1 % 10;
    reverse = reverse * 10 + digit;
    num1 = Math.trunc(num1 / 10 );
}
if (reverse == original) {
    console.log("Palidrome")
} else {
    console.log("Not a Palindrome");
}

// reverse the integer
let number = -1123;
let multiplier = number < 0 ? -1 : 1;
number = Math.abs(number);
let rev = 0;
while (number > 0) {
    let digit = number % 10;
    rev = rev * 10 + digit;
    number = Math.trunc(number / 10);
}
console.log(rev * multiplier);
