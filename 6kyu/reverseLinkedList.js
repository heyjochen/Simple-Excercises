/*

Linked Lists - Recursive Reverse

Write a Recursive Reverse() function that recursively reverses a linked list. You may want to use a nested function for the recursive calls.

var list = 2 -> 1 -> 3 -> 6 -> 5 -> null
reverse(list) === 5 -> 6 -> 3 -> 1 -> 2 -> null


*/

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function reverse(head, prev = null) {
  if (!head) return prev;
  let next = head.next;
  head.next = prev;
  return reverse(next, head);
}
