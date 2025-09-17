/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(arr, start = 0, result = []) {
    if (arr.length == 1) {
        return [arr]
    }

  if (start === arr.length - 1) {
    result.push([...arr]);
    return;
  }

  for (let i = start; i < arr.length; i++) {
    [arr[start], arr[i]] = [arr[i], arr[start]];   // Swap elements at indices start and i
    permute(arr, start + 1, result);               // Recurse for next index
    [arr[start], arr[i]] = [arr[i], arr[start]];   // Backtrack: swap back to restore original array
  }
  return result;
}