/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var p = q = midlist = head;
    while (p && p.next){
        if (head === midlist){
            head = midlist.next;
        }
        q = p.next;
        midlist.next = p.next;
        p.next = p.next.next;
        q.next = p;
        midlist = p;
        p = p.next;
    }
    return head;
};