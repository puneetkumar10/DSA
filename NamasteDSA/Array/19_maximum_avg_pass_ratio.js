/** LEETCODE 1792
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */

// TLE works fine with small arrays my logic 
var maxAverageRatio = function(classes, extraStudents) {
    const gain = (p, t) => (p + 1) / (t + 1) - p / t;

    while (extraStudents > 0) {
        let maxChange = -1;
        let maxChangeIndex = 0;

        for (let i = 0; i < classes.length; i++) {
            let [p, t] = classes[i];
            let currGain = gain(p, t);
            if (currGain > maxChange) {
                maxChange = currGain;
                maxChangeIndex = i;
            }
        }

        // assign one student
        classes[maxChangeIndex][0] += 1;
        classes[maxChangeIndex][1] += 1;
        extraStudents--;
    }

    // calculate average pass ratio
    let sum = 0;
    for (let [p, t] of classes) {
        sum += p / t;
    }
    return sum / classes.length;
};


// HEAP SOLUTION CHATGPT 

/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
  const gain = (p, t) => (p + 1) / (t + 1) - p / t;

  // tiny max-heap for triples [gain, p, t]
  const h = [];
  const up = i => { while (i) { let p = (i - 1) >> 1;
    if (h[p][0] >= h[i][0]) break; [h[p], h[i]] = [h[i], h[p]]; i = p; } };
  const down = i => { for (;;) { let l = i * 2 + 1, r = l + 1, b = i;
    if (l < h.length && h[l][0] > h[b][0]) b = l;
    if (r < h.length && h[r][0] > h[b][0]) b = r;
    if (b === i) break; [h[i], h[b]] = [h[b], h[i]]; i = b; } };
  const push = (g, p, t) => { h.push([g, p, t]); up(h.length - 1); };
  const pop = () => { const top = h[0]; const last = h.pop();
    if (h.length) { h[0] = last; down(0); } return top; };

  // build heap
  for (const [p, t] of classes) push(gain(p, t), p, t);

  // assign students greedily
  while (extraStudents-- > 0) {
    let [, p, t] = pop();
    p++; t++;
    push(gain(p, t), p, t);
  }

  // compute average
  let sum = 0;
  while (h.length) {
    const [, p, t] = pop();
    sum += p / t;
  }
  return sum / classes.length;
};