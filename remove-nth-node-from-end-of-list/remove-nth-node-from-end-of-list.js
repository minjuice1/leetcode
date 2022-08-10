/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummyHead = new ListNode(null)
    dummyHead.next = head;
    
    let fast = dummyHead;
    let slow = dummyHead;
    
    for(let i = 1; i < n+1; i++) {
        fast = fast.next   
    }
    // console.log("fast", fast) // 2 3 4 5
    
    
    while(fast.next !== null) {
        fast = fast.next
        // console.log("fast", fast.val) // 3 -> 4 -> 5
        slow = slow.next
        // console.log("slow", slow.val) // 1 -> 2 -> 3
    }
    
    slow.next = slow.next.next
    // console.log(slow.next) // [5]
    // console.log(slow.val) // 3
    // console.log(fast.val) // 5
    // console.log(dummyHead.next) // [1, 2, 3, 5]
    
    return dummyHead.next
    
}