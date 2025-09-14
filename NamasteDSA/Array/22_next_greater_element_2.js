// Leetcode 503

var nextGreaterElements = function(nums) {
  let resp = [];
  for (let i = 0; i < nums.length; i++) {
    let found = false;

    // pos -> end
    for (let start = i + 1; start < nums.length; start++) {
      if (nums[start] > nums[i]) {
        resp.push(nums[start]);
        found = true;
        break;
      }
    }

    // start -> pos (only if not found yet)
    if (!found) {
      for (let start2 = 0; start2 < i; start2++) {
        if (nums[start2] > nums[i]) {
          resp.push(nums[start2]);
          found = true;
          break;
        }
      }
    }

    if (!found) resp.push(-1);
  }
  return resp;
};