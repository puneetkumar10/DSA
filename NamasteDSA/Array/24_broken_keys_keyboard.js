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