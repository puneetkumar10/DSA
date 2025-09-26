/**
 * @param {number} num
 * @return {boolean}
 */
// var isSameAfterReversals = function(num) {
//     if (num == 0) return true
//     if (num % 10 == 0) return false
    
//     let numRev = num.toString().split('').reverse().join('');
//     let numRevRev = parseInt(numRev.split('').reverse().join(''));
//     if (numRevRev == num) {
//         return true
//     } else {
//         return false
//     }
// };

var isSameAfterReversals = function(num) {
    if(num == 0)    return true;
    if(num % 10 == 0)   return false;
    return true;
};