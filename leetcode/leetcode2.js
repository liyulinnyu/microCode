You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    var result = new ListNode(0),
        head = result;
        digit = 0;
    
    while (l1 && l2){
        var sum = l1.val + l2.val + digit;
        digit = sum > 9 ? 1 : 0;
        result.next = new ListNode(sum % 10);
        l1 = l1.next;
        l2 = l2.next;
        result = result.next;
    }
    
    while (l1){
        l1.val += digit;
        digit = l1.val > 9 ? 1 : 0;
        result.next = new ListNode(l1.val % 10);
        l1 = l1.next;
        result = result.next;
    }
    
    while (l2){
        l2.val += digit;
        digit = l2.val > 9 ? 1 : 0;
        result.next = new ListNode(l2.val % 10);
        l2 = l2.next;
        result = result.next;
    }
    
    if (digit === 1){
        result.next = new ListNode(1);
    }
    
    return head.next;
};