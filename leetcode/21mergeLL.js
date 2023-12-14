var mergeTwoLists = function(list1, list2) {
  const dummy = new ListNode();
  let current = dummy;

  let current1 = list1;
  let current2 = list2;

  while (current1 !== null && current2 !== null) {
    if (current1.val <= current2.val) {
      current.next = current1;
      current1 = current1.next;
    } else {
      current.next = current2;
      current2 = current2.next;
    }

    current = current.next;
  }

  if (current1 !== null) {
    current.next = current1;
  }

  if (current2 !== null) {
    current.next = current2;
  }

  return dummy.next;
};
