/** LEETCODE 290
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

/** 
 * Create 2 objects 
 * Check for length mismatch for pattern and s
 * Iterate 1 by 1 for both pattern and s , save them in respective objects 
 * Check if any of those 2 objects have existing entry for incoming values , also check incoming values must be same or else return false
 * If not then initialize the values in both maps
*/
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;

    const p2w = Object.create(null);
    const w2p = Object.create(null);

    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const w = words[i];

        if (p2w[p] === undefined && w2p[w] === undefined) {
        p2w[p] = w;
        w2p[w] = p;
        } else {
        if (p2w[p] !== w || w2p[w] !== p) return false;
        }
    }
    return true;
};