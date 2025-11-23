/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    let dp = [0, -Infinity, -Infinity]; // dp[r] = max sum with sum % 3 == r

    for (const num of nums) {
        const next = [...dp]; // copy current state

        for (let r = 0; r < 3; r++) {
            if (dp[r] > -Infinity) {
                const newSum = dp[r] + num;
                const rem = newSum % 3;
                next[rem] = Math.max(next[rem], newSum);
            }
        }

        dp = next;
    }

    return dp[0]; // max sum divisible by 3
};
