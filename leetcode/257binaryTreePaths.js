var binaryTreePaths = function(root) {
  let ans = [];

  function dfs(node, path) {
    if (!node) {
      return;
    }

    path += (path === '' ? '' : '->') + node.val;

    if (!node.left && !node.right) {
      ans.push(path);
      return;
    }

    dfs(node.left, path);
    dfs(node.right, path);
  }

  dfs(root, '');

  return ans;
};
