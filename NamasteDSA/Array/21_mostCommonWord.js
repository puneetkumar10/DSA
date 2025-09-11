/** Leetcode 819
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let max = 0;
    let maxWord = "";

    // remove "." , "," using regex
    const words = paragraph.toLowerCase().match(/\w+/g);
    let wordMap = {}

    // populate wordMap object with words and their count
    for (let i = 0 ; i < words.length ; i ++) {
        wordMap[words[i]] = (wordMap[words[i]] || 0) + 1;
    }

    // remove banned words from map 
    for (let j = 0 ; j < banned.length ; j ++) {
        delete wordMap[banned[j]]
    }

    // now we find the max and return 
    for (let ele in wordMap) {
        if (wordMap[ele] > max) {
            max = wordMap[ele]
            maxWord = ele
        }
    }
    return maxWord;
};


// More efficient solution 

var mostCommonWord = function(paragraph, banned) {
  const bannedSet = new Set(banned.map(b => b.toLowerCase()));
  const counts = Object.create(null);
  let max = 0, maxWord = "";

  for (const w of (paragraph.toLowerCase().match(/\w+/g) || [])) {
    if (bannedSet.has(w)) continue;
    const c = (counts[w] = (counts[w] || 0) + 1);
    if (c > max) { max = c; maxWord = w; }
  }
  return maxWord;
};