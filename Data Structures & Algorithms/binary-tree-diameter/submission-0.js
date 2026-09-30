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
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        // Helper function to return the height of the tree
        function getHeight(node) {
            if (node === null) return 0;

            const leftHeight = getHeight(node.left);
            const rightHeight = getHeight(node.right);

            // Update the global maximum diameter (path = left height + right height)
            maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

            // Return the height of the current subtree
            return 1 + Math.max(leftHeight, rightHeight);
        }

        getHeight(root);
        return maxDiameter;
    }
}
