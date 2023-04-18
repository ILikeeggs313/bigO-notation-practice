//insert function
class Node{
    constructor(val, left=null, right=null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree{
    constructor(root = null) {
        this.root = root;
    }
    insert(val){
        if(!this.root) {
            this.root = new Node(val);
            return this;
        }
        let currentNode = this.root;
        while(true){
            if(currentNode.val > val){
                if(currentNode.left === null){
                    currentNode.left = new Node(val);
                    return this;
                } else {
                    currentNode.left = left;
                }
            } else if (currentNode.val < val){
                if(currentNode.right = null){
                    currentNode.right = new Node(val);
                    return this;
                } else{
                    currentNode.right = right;
                }
            }
        }
    }
    insertRecursively(val, currentNode = this.root){
        if(this.root === null){
            this.root = new Node(val);
            return this;
        }
        if(currentNode.val > val){
            if(currentNode.left === null){
                currentNode.left = new Node(val);
                return this;
            }
            return this.insertRecursively(val, currentNode.left);
        }
        if(currentNode.val < val){
            if(currentNode.right === null){
                currentNode.right = new Node(val);
                return this;
            }
            return this.insertRecursively(val, currentNode.right);
        }   
    }
    find(val){
        let currentNode = this.root;
        let found = false;

        if (val === currentNode.val) return currentNode;

        while (currentNode && !found) {
            if (val < currentNode.val) {
            currentNode = currentNode.left;
        } else if (val > currentNode.val) {
            currentNode = currentNode.right;
        } else {
            found = true;
        }
        }

        if (!found) return undefined;
        return currentNode;
    }
    findRecursively(val, currentNode=this.root){
        if(this.root === null) return undefined;
        if(currentNode.val > val){
            if(currentNode.left === null) return undefined;
            return this.findRecursively(val, currentNode.left) 
        }
        if(currentNode.val < val){
            if(currentNode.right === null) return undefined;
            return this.findRecursively(val, currentNode.right);
        }
    }
    dfsPreorder(){
        let data = [];
        let current = this.root;
    
        function traverse(node) {
          data.push(node.val); // visit
          node.left && traverse(node.left); // go left if there's a left
          node.right && traverse(node.right); // go right if there's a right
        }
    
        traverse(current);
        return data;
    }
    dfsInOrder(){
        let data = [];
        let current = this.root;
    
        function traverse(node) {
          node.left && traverse(node.left); // go left if there's a left
          data.push(node.val); //visit
          node.right && traverse(node.right); // go right if there's a right
        }
    
        traverse(current);
        return data;
    }
    dfsPostOrder(){
        let data = [];
        let current = this.root;
    
        function traverse(node) {
          node.left && traverse(node.left); // go left if there's a left
          node.right && traverse(node.right); // go right if there's a right
          data.push(node.val); //visit
        }
    
        traverse(current);
        return data;
    }
    bfs(){
        let node = this.root;
        let queue = [];
        let data = [];

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

    return data;
    }
    remove(){
        //further study
        let nodeToRemove = this.root;
        let parent;
    
        while (nodeToRemove.val !== val) {
          parent = nodeToRemove;
          if (val < nodeToRemove.val) {
            nodeToRemove = nodeToRemove.left;
          } else {
            nodeToRemove = nodeToRemove.right;
          }
        }
    
        if (nodeToRemove !== this.root) {
          if (nodeToRemove.left === null && nodeToRemove.right === null) {
            if (parent.left === nodeToRemove) {
              parent.left = null;
            } else {
              parent.right = null;
            }
          } else if (nodeToRemove.left !== null && nodeToRemove.right !== null) {
            let rightParent = nodeToRemove;
            let right = nodeToRemove.right;
            if (right.left === null) {
              right.left = nodeToRemove.left;
              if (parent.left === nodeToRemove) {
                parent.left = right;
              } else {
                parent.right = right;
              }
            } else {
              while (right.left !== null) {
                rightParent = right;
                right = right.left;
              }
              if (parent.left === nodeToRemove) {
                parent.left.val = right.val;
              } else {
                parent.right.val = right.val;
              }
              if (right.right !== null) {
                rightParent.left = right.right;
              } else {
                rightParent.left = null;
              }
            }
          } else {
            if (parent.left === nodeToRemove) {
              if (nodeToRemove.right === null) {
                parent.left = nodeToRemove.left;
              } else {
                parent.left = nodeToRemove.right;
              }
            } else {
              if (nodeToRemove.right === null) {
                parent.right = nodeToRemove.left;
              } else {
                parent.right = nodeToRemove.right;
              }
            }
          }
        }
        return nodeToRemove;
    }
}