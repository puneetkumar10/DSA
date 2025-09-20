/** LLETCODE 1154
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let monthArr = ["31","28","31","30","31","30","31","31","30","31","30","31"]
    let dateArr = date.split("-");
    let total = 0;
    for (let i = 0 ; i < parseInt(dateArr[1]) - 1 ; i++) {
        total = total + parseInt(monthArr[i])
    }
    // leap year check (if it is leap year and month is greater than 2 {February} then add 1)
    if (((parseInt(dateArr[0]) % 4 === 0 && parseInt(dateArr[0]) % 100 !== 0) || parseInt(dateArr[0]) % 400 === 0) &&  parseInt(dateArr[1]) > 2) {
        return total + parseInt(dateArr[2]) + 1 ;
    } else {
        return total + parseInt(dateArr[2])
    } 
};

// clean version 
var dayOfYear = function(date) {
  const [yStr, mStr, dStr] = date.split("-");
  const y = +yStr, m = +mStr, d = +dStr; // converts strings to int

  const isLeap = (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
  const monthDays = [31, isLeap ? 29 : 28, 31,30,31,30,31,31,30,31,30,31];

  let total = 0;
  for (let i = 0; i < m - 1; i++) total += monthDays[i];

  return total + d;
};