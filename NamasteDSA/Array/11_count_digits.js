/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0;
    let backup = num;
    while (num > 0) {
        let digit = num % 10 ;
        if (backup % digit == 0) count++;
        num = Math.trunc(num / 10);
    }
    return count;
};