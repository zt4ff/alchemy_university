// Tree data structures are used heavily in blockchain development

// Binary Search Tree - BST is a type of tree with the set of the following rules
// - it's a binary tree ()
// - the left side of the sub-node has nodes with keys that is lesser than the key of the parent node
// - the right side of the sub-node has nodes with keys that is greater than the key of the parent node

// BUILDING A BINARY SEARCH TREE
class Node {
  constructor(data) {
    this.data = data;
  }
}

class Tree {
  constructor() {
    // store reference to the tree's root
    this.root = null;
  }

  addNode(node, parent = this.root) {
    if (!this.root) {
      this.root = node;
      return;
    }
    if (node.data > parent.data) {
      if (parent.right) {
        this.addNode(node, parent.right);
        return;
      }
      parent.right = node;
    } else {
      if (parent.left) {
        this.addNode(node, parent.left);
        return;
      }
      parent.left = node;
    }
  }

  hasNode(num, looper = this.root) {
    if (num.data == looper.data) return true;
    if (looper.data < num.data) {
      // searching to the right
      if (!looper.right) return false;
      return this.hasNode(num, looper.right);
    } else {
      if (!looper.left) return false;
      return this.hasNode(num, looper.left);
    }
  }
}
