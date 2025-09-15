// LEETCODE 1935
var canBeTypedWords = function(text, brokenLetters) {
    let count = 0
    let wordArr = text.split(" ")
    let brokenLettersArr = brokenLetters.split("")
    let valid;
    
    for (let i = 0 ; i < wordArr.length ; i ++) {
        valid = true;
        for (let j = 0 ; j < brokenLettersArr.length ; j++) {
            if (wordArr[i].includes(brokenLettersArr[j])) {
                if (valid == true) {
                    count ++
                    valid = false;
                }
            }
        }
    }

    return wordArr.length-count;

};  

// more efficient solution 

var canBeTypedWords = function(text, brokenLetters) {
  const broken = new Set(brokenLetters);
  let ok = 0;

  for (const word of text.split(" ")) {
    let valid = true;
    for (const ch of word) {
      if (broken.has(ch)) { valid = false; break; }
    }
    if (valid) ok++;
  }
  return ok;
};