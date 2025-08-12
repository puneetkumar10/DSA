var isBalanced = function(root) {
    function traverse(curr) {
        if (!curr) return 0; // height of empty tree is 0

        let leftLevel = traverse(curr.left);   // height of left subtree
        if (leftLevel === -1) return -1;       // unbalanced left subtree

        let rightLevel = traverse(curr.right); // height of right subtree
        if (rightLevel === -1) return -1;      // unbalanced right subtree

        if (Math.abs(leftLevel - rightLevel) > 1) return -1; // unbalanced at this node

        return 1 + Math.max(leftLevel, rightLevel); // return height
    }

    return traverse(root) !== -1;
};
