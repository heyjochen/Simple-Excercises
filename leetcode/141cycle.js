function hasCycle(head) {
  let set = new Set()
  let current = head
  while (current) {
    if (set.has(current.val)) {
      return true
    }

    set.add(current.val)
    current = current.next
  }

  return false
}
