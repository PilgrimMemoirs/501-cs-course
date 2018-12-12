'use strict';

///////////////////////
// N O D E  C L A S S
///////////////////////


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

let list = new LinkedList();
list.add(1);
list.add(5);
list.add(3);
list.add(10);

// console.log(list);

///////////////////////
// T R A V E R S I N G
///////////////////////

// traverse can accept a function to run a process while traversing
list.traverse(console.log);


let sum = 0;
list.traverse( v => sum += v)
console.log(sum);