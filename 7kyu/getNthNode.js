/*

Linked Lists - Get Nth

Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

getNth(1 -> 2 -> 3 -> null, 0).data === 1
getNth(1 -> 2 -> 3 -> null, 1).data === 2

The index should be in the range [0..length-1]. If it is not, or if the list is empty, GetNth() should throw/raise an exception (ArgumentException in C#, InvalidArgumentException in PHP, Exception in Java).



*/
// P: linked list
// R: nth node, so we can subtract from that number
// E:
// P: define a base case, if (!node) return 0
// return getNth(node.next, index-1)

/*

            1   2   3   4
            0   1   2   3
            2   1   0
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (node === null) throw Error;
  if (index === 0) return node;
  return getNth(node.next, index - 1);
}
