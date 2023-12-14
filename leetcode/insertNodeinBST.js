const insertNode = (root, val) => {
  if (!root) {
    return new Treenode(val)
  }

  if (val < root.val) {
    root.left = insertNode(root.left, val)
  } else if (val > root.val) {
    root.right = insertNode(root.right, val)
  }

  return
}

const findMinNode = (root) => {
  let current = root

  while (current && current.left) {
    current = current.left
  }
  return current
}
