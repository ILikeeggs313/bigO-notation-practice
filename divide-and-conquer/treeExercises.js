/** TreeNode: node for a general tree. */

class TreeNode {
    constructor(val, children = []) {
      this.val = val;
      this.children = children;
    }
  }
  
  class Tree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** sumValues(): add up all of the values in the tree. */
  
    sumValues() {
      //if there is nothing in the root, return 0 or null
      if (!this.root) return 0;
      let sumTotal = this.root.val;
      //let us traverse through the nodes and accumulate all the children elements
      function summation(node){
        for(let child of node.children){
          sumTotal += child.val;
          //using recursion
          if(child.children.length > 0){
            summation(child)
          }
        }
      }
      summation(this.root);
      return sumTotal;
    }
  
    /** countEvens(): count all of the nodes in the tree with even values. */
  
    countEvens() {
      //as usual, if there is nothing in the DOM, return 0
      if(!this.root) return 0;
      //we can use a modulo here
      let evenNums = this.root.val % 2 === 0 ? 1 : 0;
      function countEvenNums(node){
        //again, we need to go through all the children nodes
        for(let child of node.children){
          //if the value is an even number, which is % 2 === 0, then count it
          if (child.val % 2 === 0) evenNums++;
          //if the children elements exist, then recurse it
          if(child.children.length > 0){
            countEvenNums(child)
          }
        }
      }
      countEvenNums(this.root);
      return evenNums;
    }
  
    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */
  
    numGreater(lowerBound) {
      //similar to counting even nums, just this time change it to lowerBound logic instead
      //as usual, if nothing exists in the DOM return 0
      if(!this.root) return 0;
      let count = this.root.val > lowerBound? 1 : 0;
      function countNumGreater(node){
        for(let child of node.children){
          //if the child.val is > lowerBound return count ++
          if(child.val > lowerBound) count++;
          //if the child elements exist, recurse it
          if(child.children.length > 0){
            countNumGreater(child)
          }
        }
      }
      //finally return it
      countNumGreater(this.root);
      return countNumGreater;
    }
  }
  
  module.exports = { Tree, TreeNode };
  