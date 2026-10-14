/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null;
    let curr = slow.next;
    slow.next = null; 
    while (curr) {
        let nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }
    let first = head;
    let second = prev;
    while (second) {
        let tmp1 = first.next;
        let tmp2 = second.next;
        
        first.next = second;
        second.next = tmp1;
        
        first = tmp1;
        second = tmp2;
    }
    }
}
