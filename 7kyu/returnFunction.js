/*

Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

let addThree = add(3);
addThree(3); // 6

*/

function add(n) {
  return function addMore(m) {
    return n+m
  }
}

//OR

let add = a=> n=>n+a
