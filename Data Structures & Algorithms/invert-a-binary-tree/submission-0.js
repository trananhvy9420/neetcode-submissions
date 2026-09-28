/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
    if (root === null) return null;

    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();
        const temp = current.left;
        current.left = current.right;
        current.right = temp;
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return root;
    }
}
