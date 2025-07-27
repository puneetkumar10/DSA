/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let sumMatch = false;

    function traverse (curr , sum) {
        if (! curr ) return;
        sum = sum + curr.val;
        if ( ! curr.left && !curr.right) {
            if (targetSum == sum) {
                sumMatch = true;
            }
        }
        traverse (curr.left , sum);
        traverse (curr.right , sum)
    }

    traverse (root , 0);
    return sumMatch;
};