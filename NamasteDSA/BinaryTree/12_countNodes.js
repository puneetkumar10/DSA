// LEET Code 222
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var countNodes = function(root) {
    let count = 0 ;

    function traverse(curr) {
        if (! curr ) return;

        // in order traversal
        traverse(curr.left);
        count++;
        traverse(curr.right);
    }

    traverse(root)
    return count;
};

// ChatGPT efficient solution
var countNodes = function(root) {
  if (!root) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
};