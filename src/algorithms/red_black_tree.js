class RBT_Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
      this.black = false;
      this.isLeftChild = false;
    }
  }
  
  //balanced binary search tree uses color labels of node for rebalancing
  class RedBlackTree {
    constructor() {
      this.root = null;
      this.height = 0;
      this.size = 0;
    }
  
    add(key, value) {
      const node = new RBT_Node(key, value);
      if (this.root == null) {
        this.root = node;
        this.root.black = true;
        this.size++;
        return;
      }
      this.insert(this.root, node);
      this.size++;
    }
  
    insert(parent, newNode) {
      if (this.isNewnodeKeyGreater(newNode, parent)) {
        if (parent.right == null) {
          parent.right = newNode;
          newNode.parent = parent;
          newNode.isLeftChild = false;
        } else {
          this.insert(parent.right, newNode);
        }
      } else {
        if (parent.left == null) {
          parent.left = newNode;
          newNode.parent = parent;
          newNode.isLeftChild = true;
        } else {
          this.insert(parent.left, newNode);
        }
      }
      this.checkColor(newNode);
      return;
    }
  
    //checks for if two consecutive trees are red
    checkColor(node) {
      if (node == this.root) {
        node.black = true;
        return;
      }
      if (!node) {
        if (!node.parent) {
          if (!node.black && !node.parent.black) {
            this.correctTree(node);
          }
          this.checkColor(node.parent);
        }
      }
    }
  
    //corrects tree
    correctTree(node) {
      if (node.parent.isLeftChild) {
        //aunt is grandparent's irght
        if (node.parent.parent.right == null || node.parent.parent.right.black) {
          //rotation
          this.rotate(node);
          return;
        }
        if (node.parent.parent.right != null) {
          node.parent.parent.right.black = true;
        }
        node.parent.parent.black = false;
        node.parent.black = true;
        return;
      }
  
      //aunt is grandparent's left i.e. parent is rightChild of node
      if (node.parent.parent.left == null || node.parent.parent.left.black) {
        //rotation
        this.rotate(node);
        return;
      }
      if (node.parent.parent.left != null) {
        node.parent.parent.left.black = true;
      }
      node.parent.parent.black = false;
      node.parent.black = true;
      return;
    }
  
    //interface for calling which type of rotation
    rotate(node) {
      if (node.isLeftChild) {
        if (node.parent.isLeftChild) {
          //actual rotation is done with respect to grandparent
          this.rightRotate(node.parent.parent);
          node.parent.black = true;
          node.black = false;
          //set sibling red
          if (node.parent.right != null) {
            node.parent.right.black = true;
          }
          return;
        }
        //is node is left but node's parent is right child
        this.rightLeftRotate(node.parent.parent);
        node.black = true;
        node.right.black = false;
        node.left.black = false;
        return;
      }
      //node and node's parent both are right child
      if (!node.parent.isLeftChild) {
        this.leftRotate(node.parent.parent);
        node.black = false;
        node.parent.black = true;
        if (node.parent.left != null) {
          node.parent.left.black = false;
        }
        return;
      }
      this.leftRightRotate(node.parent.parent);
      node.black = true;
      node.right.black = false;
      node.left.black = false;
      return;
    }
  
    //grandparent node passed of node which disturbed balance
    leftRotate(node) {
      //RR heavy tree
      const temp = node.right;
      node.right = temp.left;
      if (node.right != null) {
        node.right.parent = node;
        node.right.isLeftChild = false;
      }
      if (node.parent == null) {
        this.root = temp;
        temp.parent = null;
      } else {
        temp.parent = node.parent;
        if (node.isLeftChild) {
          temp.isLeftChild = true;
          node.parent.left = temp;
        } else {
          temp.isLeftChild = false;
          node.parent.right = temp;
        }
      }
      temp.left = node;
      temp.isLeftChild = true;
      node.parent = temp;
    }
  
    rightRotate(node) {
      const temp = node.left;
      node.left = temp.right;
      if (node.left != null) {
        node.left.parent = node;
        node.left.isLeftChild = true;
      }
      if (node.parent == null) {
        this.root = temp;
        temp.parent = null;
      } else {
        temp.parent = node.parent;
        if (node.isLeftChild) {
          temp.isLeftChild = true;
          node.parent.left = temp;
        } else {
          temp.isLeftChild = false;
          node.parent.right = temp;
        }
      }
      temp.right = node;
      node.isLeftChild = false;
      node.parent = temp;
    }
  
    leftRightRotate(node) {
      this.leftRotate(node.left);
      this.rightRotate(node);
    }
  
    rightLeftRotate(node) {
      this.rightRotate(node.right);
      this.leftRotate(node);
    }
  
    isNewnodeKeyGreater(newNode, parent) {
      return newNode.key > parent.key;
    }
  
    inOrderTraversal(node, sortedArray = []) {
      if (node == null) {
        return;
      }
      this.inOrderTraversal(node.left, sortedArray);
      sortedArray.push(node.value);
      this.inOrderTraversal(node.right, sortedArray);
      return sortedArray;
    }
  
    reverseOrderTraversal(node, sortedArray = []) {
      if (node == null) {
        return;
      }
      this.inOrderTraversal(node.right, sortedArray);
      sortedArray.push(node.value);
      this.inOrderTraversal(node.left, sortedArray);
      return sortedArray;
    }
  }
  
  export default RedBlackTree;
  
  //Implementation example
  
  // const tree = new RedBlackTree();
  // tree.add("apil", 10);
  // tree.add("bily", 5);
  // tree.add("anup", 1);
  // tree.add("kshitiz", 40);
  // tree.add("aang", 2);
  // tree.add("zing", 6);
  // tree.add("zong", 23);
  // tree.ascendingOrder();
  // console.log(" ");
  // tree.descendingOrder();
  