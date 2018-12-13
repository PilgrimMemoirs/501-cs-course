'use strict'

class Node {
  constructor(val, next) {
    this.value = val;
    this.next = next;
  }
}

// let list = new Node(1, new Node(2, new Node(5, new Node(6, null))))


///////////////////////////////////
// L I N K E D  L I S T  C L A S S
/////////////////////////////////

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  add(val) {
    let nn = new Node(val);
    nn.next = this.head;
    this.head = nn;
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


// This stack is using dependency injection from linked list.
  // Other alternatives include: inheritance, composition and building all functionality instead

class Stack {
  constructor(store) {
    this.list = store;
  }
  
  push(val) {
    this.list.add(val);
  }
  
  pop() {
    let node = this.list.head;
    this.list.head = node.next;
    return node.value;
  }
  
  peek() {
    this.list.head.value;
  }
  
  isEmpty() {
    if ( this.list.head === null ) { return true };
  }
}



