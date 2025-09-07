/** LEETCODE 1304
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    if (n == 1) {
        return [0]
    }
    let resp = []
    if (n % 2 == 0) {
        // even
        for (let i = 1 ; i <= Math.floor(n/2) ; i++) {
            resp.push(i);
            resp.push(i * -1)
        }
    } else {
        // odd 
        for (let i = 1 ; i <= Math.floor(n/2) ; i++) {
            resp.push(i);
            resp.push(i * -1)
        }
        resp.push(0)
    }

    return resp;
};