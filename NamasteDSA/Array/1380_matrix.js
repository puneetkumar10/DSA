/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    let minValRaw = Math.min(...matrix[i]);
    let minIndexRaw = matrix[i].indexOf(minValRaw);

    let isMaxInCol = true;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][minIndexRaw] > minValRaw) {
        isMaxInCol = false;
        break;
      }
    }

    if (isMaxInCol) result.push(minValRaw);
  }

  return result;
};