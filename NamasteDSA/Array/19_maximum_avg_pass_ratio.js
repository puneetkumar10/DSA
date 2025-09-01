/**
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