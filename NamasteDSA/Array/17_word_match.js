/** LEETCODE 290
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
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