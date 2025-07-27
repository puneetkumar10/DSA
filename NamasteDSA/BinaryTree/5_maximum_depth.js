// Leetcode 104 : Find maximum deoth of a tree ;
// MY SOLUTION :-
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
 * @return {number}
 */
var maxDepth = function(root) {
    let ans = []
    let depth = 0;

    function traverse (curr , level) {
        if (! curr ) return 0
        if (! ans[level]) {
            ans[level] = [];
            depth ++;
        } 

        ans[level].push(curr.val);
        curr.left && traverse (curr.left , level + 1);
        curr.right && traverse (curr.right , level + 1); 
        return level;
    }

    traverse (root , 0);
    return depth;
};



// Same solution without pushing into array 

var maxDepth = function(root) {
    let maxDepth = 0;
    if ( ! root ) return 0
    function traverse (curr , level) {
        maxDepth = Math.max(maxDepth , level);
        curr.left && traverse (curr.left , level + 1);
        curr.right && traverse (curr.right , level + 1);
    }

    traverse (root , 0);
    return maxDepth + 1;
};