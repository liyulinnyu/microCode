/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var length = lists.length;
    if (length === 0){
        return [];
    }
    if (length === 1){
        return lists[0];
    }
    for (var i = 0 ; i < length-1; i++){
        if (i === 0){
            finallist = lists[0];
        }
        finallist = mergeLists(finallist, lists[i+1]);
    }
    
    function mergeLists(list1, list2) {
        var head = new ListNode(0);
        var temp = head;
        while(list1 && list2) {
            if (list1.val < list2.val) {
                temp.next = list1;
                list1 = list1.next;
            } else {
                temp.next = list2;
                list2 = list2.next;
            }
            temp = temp.next;
        }
        temp.next = list1 || list2;
        return head.next;
    }
    return finallist;
};