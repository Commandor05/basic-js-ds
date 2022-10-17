const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.rootTree === null) {
        this.rootTree = newNode;
        return this;
    }

    let current = this.rootTree;

    while (current) {
      if (data === current.data) {
        return null;
      } 

      if (data < current.data) {
          if (current.left === null) {
              current.left = newNode;
              return this;
          }
          current = current.left;
      } else {
          if(current.right === null){
              current.right = newNode;
              return this;
          } 

          current = current.right;
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if(!this.rootTree) {
      return null;
    }
      
    let current = this.rootTree
    let found = null
    while (current && !found) {
      if (data < current.data) {
        current = current.left
      } else if (data > current.data) {
          current = current.right
      } else {
            found = current
      }        
    }
    
    return found;
  }

  remove(data) {
    if (!this.rootTree) {
      return null;
    }
    
    // let current = this.rootTree;
    // let deleted = false;
    // while (current && !deleted) {
    //   if (data < current.data) {
    //     current = current.left
    //   } else if(data > current.data){
    //     current = current.right
    //   } else {            
    //     if (current.left === null && current.right === null) {
    //       current = null;
    //       deleted = true;
    //     }       
    //   }        
    // }
  }

  min() {
    if (!this.rootTree) {
      return null;
    }
    
    let current = this.rootTree
    let min = this.rootTree.data;
    while (current.left) {
      current = current.left    
    }
    
    return current.data || min;
  }

  max() {
    if (!this.rootTree) {
      return null;
    }
    
    let current = this.rootTree
    let max = this.rootTree.data;
    while (current.right) {
       current = current.right   
    }
    
    return current.data || min;
  }
}

module.exports = {
  BinarySearchTree
};