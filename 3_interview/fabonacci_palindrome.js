/** palindrome number WAY 1  */ 

// let num = 1441;
// let original = num;
// let reversed = 0;

// while (num > 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num/10);
// }

// const resp = original === reversed ? true : false
// console.log(resp)

/** PALINDROM number way 2 */

let num = 1221; //integer
let reversed = parseInt(num.toString().split('').reverse().join(''));  // "1221" => ["1" , "2" , "2" , "1"] => ["1" , "2" , "2" , "1"] => "1221" 
num === reversed ? console.log("Palindrome Number") : console.log("Not a palindrome numeber");


/** Fabonacci Series */

let n = 9;
let n1 = 0;
let n2 = 1;
let next = 0;

console.log(n1);  
for (let i = 0 ; i < n - 1; i ++) {
    console.log(n2); 
    next = n1 + n2;
    n1 = n2 ;
    n2 = next ;
}