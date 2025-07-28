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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    function traverse (curr) {
        if (! curr ) return curr;
        if (val == curr.val) return curr;

        if (val > curr.val) return traverse(curr.right);
        if (val < curr.val) return traverse(curr.left);
    }

    return traverse (root);
};