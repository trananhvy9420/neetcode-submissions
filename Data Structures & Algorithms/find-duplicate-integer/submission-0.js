class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];
    slow = nums[slow];
    fast = nums[nums[fast]];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    let ptr1 = nums[0];
    let ptr2 = slow;
    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }
    return ptr1;
    }
}
