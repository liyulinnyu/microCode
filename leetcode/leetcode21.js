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
var mergeTwoLists = function(l1, l2) {
    
    var list = new ListNode(0),
        result = list;
    
    while (l1 && l2){
        if (l1.val < l2.val){
            result.next = l1;
            result = result.next;
            l1 = l1.next;
        }else{
            result.next = l2;
            result = result.next;
            l2 = l2.next;
        }
    }
    
    if (l1){
        result.next = l1;
    }else if(l2){
        result.next = l2;
    }
    
    return list.next;
    
};