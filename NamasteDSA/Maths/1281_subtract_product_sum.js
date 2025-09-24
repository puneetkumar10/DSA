/** LEETCODE TAG 1281
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        n = Math.trunc(n / 10) ;
        product = product * digit;
        sum = sum + digit;
    }
    return product - sum;
};
