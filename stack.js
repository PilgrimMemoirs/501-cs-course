'use strict'
require('./linked_list.js');

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
    return true if this.list.head === null;
  }
}