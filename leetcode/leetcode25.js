/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var tail = head;
    if (!head) return null;
    
    for (var i = 0; i < k-1; i++){
        tail = tail.next;
        if (tail === null){
            return head;
        }
    }
    var next = tail.next;
    tail.next = null;
    reverse(head);
    head.next = reverseKGroup(next, k);
    return tail;
};

function reverse(cur){
    var pre = null;
    while (cur){
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
}