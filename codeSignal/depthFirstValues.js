/*

Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

Hey. This is our first binary tree problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// iterative solution prefer left side over right
const depthFirstValues = (root) => {
  let stack = [root];
  let values = [];
  if (!root) return [];
  while (stack.length > 0) {
    let current = stack.pop();
    values.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return values;
};
