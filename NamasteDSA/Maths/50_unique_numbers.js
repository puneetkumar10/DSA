/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) return 1;
  n = Math.min(n, 10);      // there are only 10 digits

  // ans accumulates count for 1..n digits (0..9 is 10 when n>=1)
  let ans = 10;             // n = 1 -> 0..9
  let unique = 9;           // ways for first digit (1..9)
  let avail = 9;            // remaining choices for next position

  for (let k = 2; k <= n; k++) {
    unique *= avail;        // e.g., 9*9, then *8, *7, ...
    ans += unique;          // add k-digit unique-count
    avail--;
  }
  return ans;
};

/** 
| Length | 1st digit        | 2nd digit            | 3rd digit | … | Count          |
| ------ | ---------------- | -------------------- | --------- | - | -------------- |
| 1      | 10 choices (0–9) | —                    | —         |   | 10             |
| 2      | 9 choices (1–9)  | 9 (any except first) |           |   | 9×9 = 81       |
| 3      | 9 (1–9)          | 9                    | 8         |   | 9×9×8 = 648    |
| 4      | 9                | 9                    | 8         | 7 | 9×9×8×7 = 4536 |

To get total up to n, we add them:
10 + 81 + 648 + 4536 + …

n = 3 
| k               | unique     | avail | ans | Meaning                 |
| --------------- | ---------- | ----- | --- | ----------------------- |
| —               | 9          | 9     | 10  | start (1-digit = 10)    |
| 2               | 9×9 = 81   | 8     | 91  | add all 2-digit uniques |
| 3               | 81×8 = 648 | 7     | 739 | add all 3-digit uniques |
| → ✅ returns 739 |            |       |     |                         |

*/
