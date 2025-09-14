// Leetcode 3541 

/**
 * @param {string} s
 * @return {number}
 */

var maxFreqSum = function(s) {
    let VMax = 0, CMax = 0;
    let VFreq = {}, CFreq = {};
    const vowels = new Set(['a','e','i','o','u']);

    for (let ch of s) {
        if (vowels.has(ch)) {
            VFreq[ch] = (VFreq[ch] ?? 0) + 1;
            VMax = Math.max(VMax, VFreq[ch]);
        } else {
            CFreq[ch] = (CFreq[ch] ?? 0) + 1;
            CMax = Math.max(CMax, CFreq[ch]);
        }
    }
    return VMax + CMax;
};

// var maxFreqSum = function(s) {
//     let VFreq = {};
//     let VMax = 0;
//     let CFreq = {};
//     let CMax = 0

//     for (let i = 0 ; i < s.length ; i ++) {
//         if (
//             s[i] == 'a' || 
//             s[i] == 'e' ||
//             s[i] == 'i' ||
//             s[i] == 'o' ||
//             s[i] == 'u'
//         ) {
//             VFreq[s[i]] = (VFreq[s[i]] ?? 0) + 1 
//         } else {
//             CFreq[s[i]] = (CFreq[s[i]] ?? 0) + 1 
//         }
//     }

//     for (let ele in VFreq) {
//         if (VFreq[ele] > VMax) {
//             VMax = VFreq[ele];
//         }
//     }

//     for (let ele in CFreq) {
//         if (CFreq[ele] > CMax) {
//             CMax = CFreq[ele];
//         }
//     }
//     return VMax + CMax;
// };