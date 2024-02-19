const treeMaze = (root, stack = []) => {
  if (!root || root.val === 0) return false
  stack.push(root.val)

  if (!root.left && !root.right) return true
  if (treeMaze(root.left, stack)) return true
  if (treeMaze(root.right, stack)) return true

  stack.pop()
  return false
}


