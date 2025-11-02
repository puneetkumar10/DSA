/** Leetcode 539
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  // Pigeonhole: more than 1440 times => duplicate minute => diff = 0
  if (timePoints.length > 1440) return 0;

  const toMin = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  const minutes = timePoints.map(toMin).sort((a, b) => a - b);

  // If exact duplicates exist, min diff is 0
  for (let i = 1; i < minutes.length; i++) {
    if (minutes[i] === minutes[i - 1]) return 0;
  }

  let minDiff = Infinity;
  for (let i = 1; i < minutes.length; i++) {
    minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
  }

  // wrap-around: last to first across midnight
  const wrap = 1440 - (minutes[minutes.length - 1] - minutes[0]);
  return Math.min(minDiff, wrap);
};
