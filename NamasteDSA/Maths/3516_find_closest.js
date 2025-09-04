/** LEETCODE 3516 find closest 
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let person1_diff = Math.abs(z - x);
    let person2_diff = Math.abs(z - y);
    return (person1_diff == person2_diff) ? 0 : (person1_diff > person2_diff) ? 2 : 1;
};