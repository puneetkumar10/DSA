/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [[]]; 
  for (const element of nums) {
    const last = result.length; 
    for (let i = 0; i < last; i++) {
      result.push([...result[i], element]);
    }
  }
  return result;
};
