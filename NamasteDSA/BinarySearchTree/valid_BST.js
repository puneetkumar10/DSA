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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function isBST (curr , min , max) {
        
        if (! curr ) return true;

        if (min != null && curr.val <= min) return false;
        if (max != null && curr.val >= max) return false;

        let isLeftBST = isBST(curr.left , min , curr.val);
        let isRightBST = isBST(curr.right , curr.val , max);

        return isLeftBST && isRightBST
    }

    return isBST(root , null , null); 
};