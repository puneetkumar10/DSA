/** 350. Intersection of Two Arrays II
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let eleMap = {}
    let resp = [];
    for (let i = 0; i < nums1.length; i++) {
        eleMap[nums1[i]] = (eleMap[nums1[i]] || 0) + 1;
    }

    for (let j = 0 ; j < nums2.length ; j++) {
        if (eleMap[nums2[j]]) {
            eleMap[nums2[j]] = eleMap[nums2[j]] - 1;
            resp.push(nums2[j])
        }
    }

    return resp
};