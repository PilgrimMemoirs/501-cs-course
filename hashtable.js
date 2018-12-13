'use strict';

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



class HashList {
  constructor(size) {
    this.bucketSize = size;
    this.bucket = [];
    for (let i=0; i < this.bucketSize; i++) {
      this.buckets.push(new LinkedList());
    }
  }
  
  findHash() {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash;
  }
  
  getBucket(key) {
    this.findHash(key) % this.bucketSize;
    return this.buckets[index];
  }
  set(key, val) {
    this.getBucket(key).add({key, val})
  }
  
  get(key) {
    
  }
  
  
}