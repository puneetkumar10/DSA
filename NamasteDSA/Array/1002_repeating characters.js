/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let charMap = {}

    for (let i = 0 ; i < words.length ; i ++) {
        for (let j = 0 ; j < words[i].length ; j ++) {
            let currWord = words[i]
            if (charMap.hasOwnProperty(currWord.charAt(j))){
                charMap[currWord.charAt(j)] = charMap[currWord.charAt(j)] + 1
            } else {
                charMap[currWord.charAt(j)] = 1
            }
        }
    }

    console.log(charMap);
}