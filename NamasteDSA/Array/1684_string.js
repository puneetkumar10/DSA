/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
function countConsistentStrings(allowed, words) {
    const allowedSet = new Set(allowed);
    let count = 0;
    for (const word of words) {
        if ([...word].every(char => allowedSet.has(char))) {
            count++;
        }
    }
    return count;
}