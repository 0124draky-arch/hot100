var invertTree = function(root) {
  if(root === null)
    return null;
  
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

var invertTree = function(root) {
    if(root === null) return null;

    invertTree(root.left);
    invertTree(root.right);

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    return root;
};
