var diameterOfBinaryTree = function(root) {
  let diameter = 0

  dfs(root)

  return diameter

  function dfs(root) {
    if (!root) return null;

    const left = dfs(root.left)
    const right = dfs(root.right)

    diameter = Math.max(diameter, left + right)

    return Math.max(left, right) + 1
  }
};


