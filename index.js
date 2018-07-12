function inOrder(currentNode) {
  if(currentNode.left) {
    inOrder(currentNode.left); 
  }
  console.log(currentNode.data);
  if (currentNode.right) {
    inOrder(currentNode.right);
  }
}

function findOrAdd(rootNode, newNode) {
  if (rootNode.data === newNode.data) {
    return rootNode;
  } else if (newNode < rootNode) {
    findOrAdd(rootNode.left);
  } else if ()
}