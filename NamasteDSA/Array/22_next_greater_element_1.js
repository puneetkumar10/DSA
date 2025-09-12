/** LLETCODE 496
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let resp = []
    let eleMap = {}
    let notFound;
    for (let i = 0 ; i < nums2.length ; i ++) {
        eleMap[nums2[i]] = (eleMap[nums2[i]] ?? i) + 0;
    }
    
    for (let j = 0 ; j < nums1.length ; j ++) {
        notFound = true;
        let start = eleMap[nums1[j]]
        for (let k = start + 1 ; k < nums2.length ; k++) {
            if (nums2[k] > nums1[j]) {
                resp.push(nums2[k])
                notFound = false;
                break;
            }
        }
        if (notFound) {
            resp.push(-1)
        }
    }
    return resp
};