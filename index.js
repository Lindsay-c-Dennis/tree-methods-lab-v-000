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
    if (rootNode.left) {
      findOrAdd(rootNode.left, newNode);
    } else {
      return currentNode.left = newNode
    }  
  } else if ()
}