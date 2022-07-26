/*

Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeIncludes(a, "e"); // -> true

*/

//BFS iterative solution
const treeIncludes = (root, target) => {
  //BFS
  let queue = [root];

  while (queue.length > 0) {
    if (!root) return false;
    let current = queue.shift();
    if (current.val === target) return true;

    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }

  return value === 1;
};

//DFS recursive
const treeIncludes2 = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};
