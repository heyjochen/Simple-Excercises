/*

Given a binary tree t and an integer s, determine whether there is a root to leaf path in t such that the sum of vertex values equals s.

*/

function solution(t, s) {
  // subtract from s until s = 0 then return true
  if (t === null) return false;
  s -= t.value;
  if (s === 0 && t.left == null && t.right == null) return true;
  return solution(t.left, s) || solution(t.right, s);
}
