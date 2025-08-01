var isSameTree = function(p, q) {
    if (!p && !q) return true; // both null
    if (!p || !q) return false; // one is null
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};