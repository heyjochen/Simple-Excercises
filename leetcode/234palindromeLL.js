function reverseList(node) {
  let current = node;
  let next = null;
  let prev = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

var isPalindrome = function(head) {
  let middle = findMiddle(head);

  let reversedSecondHalf = reverseList(middle);

  let firstHalf = head;
  let secondHalf = reversedSecondHalf;

  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
};
