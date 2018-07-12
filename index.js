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
  if (rootNode.data == newNode.data) {
    return true;
  }
  
  if (newNode.data < rootNode.data) {
    if (rootNode.left) {
      return findOrAdd(rootNode.left, newNode);
    } else {
      return rootNode.left = newNode;
    }  
  }  
 if (newNode.data > rootNode.data) {
   if (rootNode.right) {
     findOrAdd(rootNode.right, newNode);
   } else {
     return rootNode.right = newNode;
   }
 }
}