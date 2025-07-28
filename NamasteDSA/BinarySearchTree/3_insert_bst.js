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
var insertIntoBST = function(root, val) {
    function traverse (curr) {
        if (val > curr.val && curr.right == null) {
            curr.right = new TreeNode(val);
            return;
        } 
        if (val < curr.val && curr.left == null) {
            curr.left = new TreeNode(val);
            return;
        } 

        if (val > curr.val) traverse(curr.right);
        if (val < curr.val) traverse(curr.left);

        return curr;
    }

    if (!root) return new TreeNode(val);
    traverse(root);

    return root;
};