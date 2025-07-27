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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let ans = []

    function traverse(curr) {
        if (! curr ) return;
        // left -> root -> right
        traverse(curr.left);
        ans.push(curr.val);
        traverse(curr.right);
    }

    traverse(root);

    return ans;
};