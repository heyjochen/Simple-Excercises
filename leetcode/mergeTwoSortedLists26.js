/*

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

*/
const mergeTwoLists = function (l1, l2) {
  const head = new ListNode(null);
  let curr = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return head.next;
};

// When do I move forward ?
// When the next value in the current list is lower than the next value in the other lis

// When do I end ?
// When both lists/current are null

// How do I merge the two lists in one sorted list ?
// I assign the current value to the tail

// Which list will start ?
// does not matter
