/** LEETCODE 2160
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let arr = num.toString().split('').map((e)=>Number(e));
    arr.sort((a,b)=>a-b);
    return ((10*arr[0])+(10*arr[1])+arr[2]+arr[3]);
};