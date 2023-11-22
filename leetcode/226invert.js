var invertTree = function(root) {
  if (root === null) {
    return null;
  }

  // Swap left and right subtrees
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert left and right subtrees
  invertTree(root.left);
  invertTree(root.right);

  return root;
};


