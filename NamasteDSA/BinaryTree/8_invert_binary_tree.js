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
 * @return {TreeNode}
 */
var invertTree = function(root) {

    function invertRecursion (curr) {
        if (! curr ) return ;
        // swap
        let temp;
        temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;

        invertRecursion (curr.left);
        invertRecursion (curr.right);
    }

    invertRecursion (root)

    return root;
};