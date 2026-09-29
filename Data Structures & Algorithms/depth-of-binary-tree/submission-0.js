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
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0;
        const leftDepth = this.maxDepth(root.left);
        const rightDepth = this.maxDepth(root.right);
        return 1 + Math.max(leftDepth, rightDepth);
    }
}
