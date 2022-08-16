/*

Given the root of a binary tree, invert the tree, and return its root.

*/

var invertTree = function (root) {
  if (!root) return root;
  let left = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(left);
  return root;
};
