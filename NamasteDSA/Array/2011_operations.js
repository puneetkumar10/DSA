/** LEETCODE 2011
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let output = 0;
    for (let i = 0 ; i < operations.length ; i ++) {
        if (operations[i] == "++X" || operations[i] == "X++") {
            output += 1;
        } else if (operations[i] == "--X" || operations[i] == "X--") {
            output -= 1;
        } else {
            return 0; // invalid operation
        }
    }

    return output;
};
/*
if (operations[i] == "++X" || operations[i] == "X++") {
            output += 1;
        } else if (operations[i] == "--X" || operations[i] == "X--") {
            output -= 1;
        } else {
            return 0; // invalid operation
        }
*/

// CAN BE REPLACED WITH TERNARY OPERATOR 
// output += (operations[i] === "++X" || operations[i] === "X++") ? 1 : -1;