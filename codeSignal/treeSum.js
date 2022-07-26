/*

Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeSum(a); // -> 21

*/

// iterative solution DFS

const treeSum = (root) => {
  if (!root) return 0;
  let sum = 0;
  let stack = [root];

  while (stack.length > 0) {
    let current = stack.pop();
    sum += current.val;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return sum;
};

// recursive solution DFS

const treeSum2 = (root) => {
  if (root === null) return 0;

  return root.val + treeSum(root.left) + treeSum(root.right);
};

// iterative solution BFS

const treeSum3 = (root, target) => {
  if (root === null) return 0;

  const queue = [root];
  let totalSum = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    totalSum += node.val;
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }

  return totalSum;
};
