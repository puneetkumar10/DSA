/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  const sNew = s.replace(/-/g, "").toUpperCase();
  let count = 0, out = "";

  for (let i = sNew.length - 1; i >= 0; i--) {
    out = sNew[i] + out;
    count++;
    if (count === k && i !== 0) {
      out = "-" + out;
      count = 0;
    }
  }
  return out;
};