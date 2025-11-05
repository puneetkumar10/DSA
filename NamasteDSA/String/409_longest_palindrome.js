/** LEETCODE 409
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

    const freqMap = new Map();
    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    let length = 0;
    let hasOdd = false;

    for (const count of freqMap.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1; // we use even part
            hasOdd = true;       // we reserve one odd for center
        }
    }

    return hasOdd ? length + 1 : length;
};
