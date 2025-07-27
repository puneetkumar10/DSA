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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = [];

    function traverse (curr , level) {
        if (!root) return [];
        // base condition 
        if (! ans[level]) ans[level] = [];
        // recursion
        ans[level].push(curr.val);
        curr.left && traverse (curr.left , level + 1);
        curr.right && traverse (curr.right , level + 1);
    }

    traverse (root , 0) ; 
    return ans;
};