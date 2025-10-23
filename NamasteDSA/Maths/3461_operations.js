/** MY ATTEMPT - WORKS 100% CAN BE IMPROVED
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    let tempNum = ""
    while (s.length > 2) {
        for (let i = 0 ;i < s.length - 1 ; i++) {
            tempNum += (parseInt(s[i]) + parseInt(s[i+1])) % 10
        }
        s = tempNum
        tempNum = ""
    } 
    if (s.length == 2 && (s[0] == s[1])) {
        return true
    }
    return false;
};

// removed parseInt used charCodeAt which is faster than parseInt
var hasSameDigits = function (s) {
  while (s.length > 2) {
    let temp = "";             
    for (let i = 0; i < s.length - 1; i++) {
      const a = s.charCodeAt(i) - 48;    
      const b = s.charCodeAt(i + 1) - 48;
      temp += (a + b) % 10;
    }
    s = temp;
  }
  return s.length === 2 && s[0] === s[1];
};