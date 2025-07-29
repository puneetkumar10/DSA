/** 
Example 1:

Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
Example 2:

Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit. 

 */

/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let first = -1;
    let second = -1;

    for (let i = 0 ; i < s.length ; i++) {
        if ( isNaN(s[i])) {
            // if we get a character
            continue;
        } else {
            // we will get numbers
            let digit = parseInt(s[i]);
            if (digit > first) {
                second = first;
                first = digit
            }
            if (digit > second && digit < first) {
                second = digit
            }
        }
    }
    return second;
};
