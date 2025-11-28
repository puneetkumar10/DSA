/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
function countBalls(low, high) {
    const map = new Array(46).fill(0);
    const { max, floor } = Math;
    let res = 0;
    for (let num = low; num <= high; num++) {
        let total = 0;
        for (let tmp = num; tmp; tmp = floor(tmp / 10)) {
            total += tmp % 10;
        }
        res = max(res, ++map[total]);
    }
    return res;
}