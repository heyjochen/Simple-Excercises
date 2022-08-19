/*

Given a node object representing a binary tree:

Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null

write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

Examples:

10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3



*/

// df with stack
// iterative: if no root return 0, create a stack, sum variable , while there is stack.length grab the current, if current.left add it to sum and then push to stack, same for right then return sum.

function sumTheTreeValues(root) {
  if (!root) return 0;
  let stack = [root.value];
  let sum = 0;
  while (stack.length) {
    let curr = stack.pop();
    sum += curr.value;
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return sum;
}

function sumTheTreeValuesRecursive(root, sum = 0) {
  if (!root) return sum;
  const sumLeft = sumTheTreeValuesRecursive(root.left, sum);
  const sumRight = sumTheTreeValuesRecursive(root.right, sum);
  return root.value + sumLeft + sumRight;
}
