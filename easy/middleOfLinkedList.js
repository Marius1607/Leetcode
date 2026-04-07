/*
Title: Middle of the Linked List
Link: https://leetcode.com/problems/middle-of-the-linked-list/description/
Nr: 876

Description:
    Given the head of a singly linked list, return the middle node of the linked list.
    If there are two middle nodes, return the second middle node.
*/


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    if (!head.next) {
        return head;
    }
    let fasterIndex = head.next.next;

    while (fasterIndex) {
        head = head.next;
        fasterIndex = fasterIndex.next;
        if (!fasterIndex) {
            return head;
        }
        fasterIndex = fasterIndex.next;
    }

    return head.next;
};
