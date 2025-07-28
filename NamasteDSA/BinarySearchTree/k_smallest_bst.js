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
 * @param {number} k
 * @return {number}
 */

// INORDER traversal sorts the tree , so then we can simply return k-1 element where k is the index
var kthSmallest = function(root, k) {
    let resp = []
    function traverseInorder (curr) {
        if (! curr ) return ;
        // left - root - right 
        traverseInorder (curr.left);
        resp.push (curr.val);
        traverseInorder (curr.right);
    }

    traverseInorder (root); 

    return resp[k-1];
};

var kthSmallest = function(root, k) {
    let count = k;
    let ans = null;
    function traverseInorder (curr) {
        if ( ans != null) return;
        if (! curr ) return ;
        // left - root - right 
        curr.left && traverseInorder (curr.left);
        --count ;
        if (count == 0) {
            ans = curr.val;
        }
        curr.right && traverseInorder (curr.right);
    }

    traverseInorder (root); 
    return ans
};