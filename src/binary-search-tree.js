const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor () {
    this.graph = null;
  }

  root() {
    return this.graph;
  }

  add(data) {
    this.graph = addWithin(this.graph, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }   

      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.graph, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data);

    }
  }

  find(data) {
    return findWithin(this.graph, data);

    function findWithin(node, data){
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findWithin(node.left, data)
      } else {
        return findWithin(node.right, data)
      }
    }
  }

  remove(data) {
   return removeNode(this.graph, data);

   function removeNode(node,data) {
    if(!node) {
      return null;
    }

    if (data < node.data) {
      node.left = removeNode (node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = removeNode(node.right,data)
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left ) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }

      node.data = minFromRight.data;

      node.right = removeNode(node.right, minFromRight.data)

      return node;
    }
   }
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}