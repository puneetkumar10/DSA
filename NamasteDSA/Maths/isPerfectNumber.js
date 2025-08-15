/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum = 0 ;

    if (num == 1) return false;

    for (let i = 1 ; i <= Math.trunc(num/2) + 1 ; i++ ) {
        if (num % i == 0){
            sum = sum + i;
        }
    }

    if (sum == num) {
        return true
    }
    return false;
};


var checkPerfectNumber = function(num) {
  if (num <= 1) return false;     // 1 is not perfect
  if (num % 2 === 1) return false; // practical cut: no odd perfect number known

  let sum = 1;                     // 1 is always a proper divisor
  const root = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= root; i++) {
    if (num % i === 0) {
      const j = num / i;
      sum += i;
      if (j !== i) sum += j;       // add the paired divisor
      if (sum > num) return false; // early exit
    }
  }
  return sum === num;
};