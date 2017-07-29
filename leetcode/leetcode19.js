/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var length = 0,
        list = head,
        temp = head;
    
    while(list){
        length++;
        list = list.next;
    }
    length = length - n;
    
    if (length === 0){
        return head.next;
    }
    
    for (var i = 0; i < length; i++){
        if (i === length - 1){
            temp.next = temp.next.next;
        }else{
            temp = temp.next;
        }
    }
    
    return head;
};