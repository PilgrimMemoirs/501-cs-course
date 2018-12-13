'use strict';

class Node {
  constructor(val, next) {
    this.value = val;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  add(val) {
    let nn = new Node(val);
    nn.next = this.head;
    this.head = nn;
    if ( this.head.next == null) {
      this.tail = this.head;
    }
  }
  
  traverse(fun) {
    let current = this.head;
    while (current) {
      fun(current.value);
      current = current.next;
    }
  }
  
  // removes all nodes that have the input value
  remove(val) {
    let current = this.head;
  
    if (val == current.value) {
      this.head = current.next;
      if (!this.head) return
    }
    
    while(current.next.next) {
      if (val == current.next.value) {
        current.next = current.next.next;
        
      }
      current = current.next;
    } 
  }
}


class Queue() {
  constructor(list){
    this.list = list;
  }
  
  //adds new elements to tail (first in)
  enqueue (val) {
    let nn = new Node(val);
    this.list.tail.next = nn;
    this.list.tail = nn;
  }
  
  //removes from tail (first out)
  dequeue () {
    currentHead = this.list.head;
    this.list.head = currentHead.next;
    return currentHead.value;
  }
  
  peek () {
    this.list.head.value;
  }
  
  isEmpty () {
    return !this.list.head.value;
  }
}



////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




class BinaryTreeNode {
  constructor(val = null) {
    this.left = null;
    this.right = null;
    this.value = val;
  }
  
  preOrderTraverse(cb) {
    cb(this.value); // cb called first
    if (this.left){ this.left.preOrderTraverse(cb) };
    if (this.right){  this.right.preOrderTraverse(cb) };
     // this returns undefined since there's no explicit return
  }
  
  inOrderTraverse(cb) {
    if (this.left){ this.left.inOrderTraverse(cb) };
    cb(this.value); //  cb called in between 
    if (this.right){  this.right.inOrderTraverse(cb) };
    // this returns undefined since there's no explicit return
  }
  
  postOrderTraverse(cb) {
    if (this.left){ this.left.postOrderTraverse(cb) };
    if (this.right){  this.right.postOrderTraverse(cb) };
    
     cb(this.value); // cb called at end
     // this returns undefined since there's no explicit return
  }
}

class BinaryTree {
  constructor() {
    this.root = new BinaryTreeNode();
  }
  
  breadthFirst(cb) {
    list = new LinkedList;
    let q = new Queue(list);
    q.enqueue(this.root);
    
    while(!q.isEmpty()) {
      let n = q.dequeue();
      cb(n);
      if (n.left) q.enqueue(n.left);
      if (n.right) q.enqueue(n.right);
    }
  }// breadthFirst
}// BinaryTree

let b = new BinaryTree();

b.root.value = 11;

///////////
// Manually set nodes
//////////

b.root.left = new BinaryTreeNode(98);
b.root.right = new BinaryTreeNode(77);

b.root.left.right = new BinaryTreeNode(1);
b.root.left.left = new BinaryTreeNode(9);

b.root.left.left.left = new BinaryTreeNode(32398);
b.root.left.left.right = new BinaryTreeNode(32334234298);



// console.log(b.root);

// b.root.preOrderTraverse(console.log);

b.breadthFirst(console.log);