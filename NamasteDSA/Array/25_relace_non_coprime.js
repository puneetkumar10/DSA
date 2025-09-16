// 2197. Replace Non-Coprime Numbers in Array
function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
}
function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs((a / gcd(a, b)) * b);
}

var replaceNonCoprimes = function(nums) {
  const st = [];
  for (const x of nums) {
    let cur = x;
    // keep merging with the top while non-coprime
    while (st.length) {
      const g = gcd(st[st.length - 1], cur);
      if (g === 1) break;
      cur = lcm(st.pop(), cur);
    }
    st.push(cur);
  }
  return st;
};


// --------------- More descriptive answer

/**
 * Compute GCD (Greatest Common Divisor) using Euclid's algorithm.
 * Works for negative numbers too by taking absolute values.
 */
function computeGCD(a, b) {
  // Ensure we work with non-negative values
  a = Math.abs(a);
  b = Math.abs(b);

  // Repeatedly replace (a, b) with (b, a % b) until b becomes 0
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  // When b is 0, a holds the GCD
  return a;
}

/**
 * Compute LCM (Least Common Multiple).
 * Identity: lcm(a, b) = |a / gcd(a,b)| * |b|
 * If either number is 0, the LCM is defined as 0.
 */
function computeLCM(a, b) {
  if (a === 0 || b === 0) return 0;

  const gcdValue = computeGCD(a, b);
  // Divide before multiply to reduce overflow risk
  const lcmValue = Math.abs((a / gcdValue) * b);
  return lcmValue;
}

/**
 * Replace adjacent non-coprime pairs by their LCM until no such pairs remain.
 * Descriptive, step-by-step "stack" approach.
 *
 * Example:
 *   Input:  [6, 4, 3]
 *   Process: 6 & 4 share factor → merge to 12; 12 & 3 share factor → merge to 12
 *   Output: [12]
 */
function replaceNonCoprimes(nums) {
  // This stack holds the progressively merged result
  const resultStack = [];

  // Go through each number from the input one by one
  for (let index = 0; index < nums.length; index++) {
    // Start with the current incoming number
    let currentValue = nums[index];

    // Try to merge with the top of the stack as long as they are non-coprime
    // (i.e., gcd > 1). After each merge, the new value might still be
    // non-coprime with the new top, so we keep checking in a loop.
    while (resultStack.length > 0) {
      const topValue = resultStack[resultStack.length - 1];
      const currentGCD = computeGCD(topValue, currentValue);

      // If gcd == 1, they are coprime → stop merging and push currentValue
      if (currentGCD === 1) {
        break;
      }

      // Otherwise, merge the two numbers into their LCM
      const mergedLCM = computeLCM(topValue, currentValue);

      // Remove the old top (since it is merged)
      resultStack.pop();

      // The merged value becomes the new "current" to try merging left again
      currentValue = mergedLCM;

      // Loop continues to check with the next left neighbor on the stack
    }

    // After merging as far as possible, push the final currentValue
    resultStack.push(currentValue);
  }

  // The stack now represents the final array with all required merges done
  return resultStack;
}