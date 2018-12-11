'use strict';

class Node {
  constructor(val, next) {
    this.value = val;
    this.next = next;
  }
}

// let list = new Node(1, new Node(2, new Node(5, new Node(6, null))))


class LinkedList {
  constructor() {
    this.head = null;
  }
  
  add(val) {
    let nn = new Node(val);
    nn.next = this.head;
    this.head = nn;
  }
  
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.add(1);
list.add(5);
list.add(3);
list.add(10);

// console.log(list);

list.traverse();