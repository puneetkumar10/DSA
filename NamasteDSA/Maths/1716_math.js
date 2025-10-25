/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let initial = 1;
    let i = 1;
    let total = 0;
    while (i <= n) {
        for (let index = initial ; index <= initial + 7 - 1 ; index ++) {
            if (i > n) {
                break;
            }
            total = total + index
            i++
        }
        initial ++ ;
    }
    return total;
};