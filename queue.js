

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


class Queue {
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

q1 = new Queue();
q1.enqueue('hello');
q1.enqueue('hola');
q1.enqueue('hallo');
q1.enqueue("g'day");
console.log( q1.peek() );