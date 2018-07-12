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
    return true;
  } else if (newNode.data < rootNode.data) {
    findOrAdd(rootNode.left);
  } else if ()
}