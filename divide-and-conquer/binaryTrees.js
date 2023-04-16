/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinaryTree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** minDepth(): return the minimum depth of the tree -- that is,
     * the length of the shortest path from the root to a leaf. */
    maxMinHelper(node){
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxDepthHelper(node.right) + 1;
      if (node.right === null) return maxDepthHelper(node.left) + 1;
    }
    minDepth() {
      //since maxDepth and minDepth use similar logic, we'll implement a generic func
      if (!this.root) return 0;
      Math.min(this.maxMinHelper(node.left), this.maxMinHelper(node.right)) + 1;
      return this.maxMinHelper(this.root);
    }
  
    /** maxDepth(): return the maximum depth of the tree -- that is,
     * the length of the longest path from the root to a leaf. */
  
    maxDepth() {
      if (!this.root) return 0;
      Math.max(this.maxMinHelper(node.left), this.maxMinHelper(node.right)) + 1;
      return this.maxMinHelper(this.root);
  
    }
  
    /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
     * The path doesn't need to start at the root, but you can't visit a node more than once. */
  
    maxSum() {
      let result = 0;

      function maxSumHelper(node) {
        if (node === null) return 0;
        const leftSum = maxSumHelper(node.left);
        const rightSum = maxSumHelper(node.right);
        result = Math.max(result, node.val + leftSum + rightSum);
        return Math.max(0, leftSum + node.val, rightSum + node.val);
      }
  
      maxSumHelper(this.root);
      return result;
    }
  
    /** nextLarger(lowerBound): return the smallest value in the tree
     * which is larger than lowerBound. Return null if no such value exists. */
  
    nextLarger(lowerBound) {
      //no value in the DOM, return 0 or null
      if (!this.root) return null;

      // let's use BFS for this!

      let queue = [this.root];
      let closest = null;
  
      while (queue.length) {
        let currentNode = queue.shift();
        let currentVal = currentNode.val;
        let higherThanLowerBound = currentVal > lowerBound;
        let shouldReassignClosest = currentVal < closest || closest === null;
  
        if (higherThanLowerBound && shouldReassignClosest) {
          closest = currentVal;
        }
  
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
  
      return closest;
    }
  
    /** Further study!
     * areCousins(node1, node2): determine whether two nodes are cousins
     * (i.e. are at the same level but have different parents. ) */
  
    areCousins(node1, node2) {
      if (node1 === this.root || node2 === this.root) return false;

      function findLevelAndParent(
        nodeToFind,
        currentNode,
        level = 0,
        data = { level: 0, parent: null }
      ) {
        if (data.parent) return data;
        if (currentNode.left === nodeToFind || currentNode.right === nodeToFind) {
          data.level = level + 1;
          data.parent = currentNode;
        }
        if (currentNode.left) {
          findLevelAndParent(nodeToFind, currentNode.left, level + 1, data);
        }
        if (currentNode.right) {
          findLevelAndParent(nodeToFind, currentNode.right, level + 1, data);
        }
        return data;
      }
  
      let node1Info = findLevelAndParent(node1, this.root);
      let node2Info = findLevelAndParent(node2, this.root);
  
      let sameLevel =
        node1Info && node2Info && node1Info.level === node2Info.level;
      let differentParents =
        node1Info && node2Info && node1Info.parent !== node2Info.parent;
      return sameLevel && differentParents;
    }
  
    /** Further study!
     * serialize(tree): serialize the BinaryTree object tree into a string. */
  
    static serialize() {
      const values = [];

      function traverse(node) {
        if (node) {
          values.push(node.val);
          traverse(node.left);
          traverse(node.right);
        } else {
          values.push("#");
        }
      }
  
      traverse(tree.root);
      return values.join(" ");
    }
  
    /** Further study!
     * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */
  
    static deserialize(stringTree) {
      //start by returning 0 or null if nothing in the DOM
      if(!this.stringTree) return 0;
      const values =  stringTree.split(" ");
      function buildTreeObj(){
        const currVal = values.shift();
        //if the currVal === "#" return undefined
        if(currVal === "#") return undefined;
        //other wise we move on
        let currNode = new BinaryTree(+currVal);
        currNode.left =  buildTreeObj();
        currNode.right =  buildTreeObj();
        
        return currNode
      }
      const buildTreeRoot = buildTreeObj();
      return new BinaryTree(buildTreeRoot);
    }
    

    /** Further study!
     * lowestCommonAncestor(node1, node2): find the lowest common ancestor
     * of two nodes in a binary tree. */
  
    lowestCommonAncestor(node1, node2, currentNode = this.root) {
      if (currentNode === null) return null;

    // base case 2: root is one of the target nodes
    if (currentNode === node1 || currentNode === node2) return currentNode;

    // recursively search the left sub-tree
    const left = this.lowestCommonAncestor(node1, node2, currentNode.left);

    // recursively search the right sub-tree
    const right = this.lowestCommonAncestor(node1, node2, currentNode.right);

    // if neither left nor right is null, currentNode is the ancestor
    if (left !== null && right !== null) return currentNode;
    
    // if one node is not null, return it
    if (left !== null || right !== null) return left || right;
    
    // left and right are both null, return null
    if (left === null && right === null) return null;
    }
  }
  
  module.exports = { BinaryTree, BinaryTreeNode };
  