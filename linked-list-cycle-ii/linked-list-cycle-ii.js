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
let detectCycle = function (head) {
	if (!head) return null;
	if (!head.next) return null;

	let fast = head;
	let slow = head;
	let pointer = head;

	while (fast) {
		if (!fast.next) {
			return null;
		} else {
			fast = fast.next.next;
			slow = slow.next;
			if (fast === slow) break;
		}
	}

	if (fast !== slow) return null;

	while (pointer !== slow) {
		pointer = pointer.next;
		slow = slow.next;
	}
	return slow;
};