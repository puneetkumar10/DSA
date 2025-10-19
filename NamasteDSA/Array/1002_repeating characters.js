/**
 * @param {string[]} words
 * @return {string[]}
 */
// What im thinking is to select first word and then go through one character by one and do .includes for all other words if we dont find then we break , if we iterate till end for that char means that char is present in all words .. How about this appraoch ??

// Problem ->  Your idea is close, but .includes() alone won’t handle duplicates correctly.
// Example: for "bella" and "label", the letter l appears twice overall but .includes('l') only tells you it exists—not how many times it can be “used” across words.

function commonChars(words) {
  const A = 'a'.charCodeAt(0);

  // freqMin will track the running min counts across words
  let freqMin = new Array(26).fill(Infinity);

  for (const w of words) {
    const freq = new Array(26).fill(0);
    for (const ch of w) freq[ch.charCodeAt(0) - A]++;
    for (let i = 0; i < 26; i++) freqMin[i] = Math.min(freqMin[i], freq[i]);
  }

  const ans = [];
  for (let i = 0; i < 26; i++) {
    for (let c = 0; c < freqMin[i]; c++) ans.push(String.fromCharCode(A + i));
  }
  return ans;
}