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
    this.buckets = [];
    for (let i=0; i < this.bucketSize; i++) {
      this.buckets.push(new LinkedList());
    }
  }
  
  findHash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash;
  }
  
  getBucket(key) {
    let index = this.findHash(key) % this.bucketSize;
    return this.buckets[index];
  }
  
  set(key, val) {
    let obj = { key, val }
    this.getBucket(key).traverse( o => { 
      if ( o.key == key ) {
        o = obj;
        obj = null;
      }
    });
    if (obj) {}
    return true;
  }
  
  get(key) {
    let obj = null;
    this.getBucket(key).traverse(o => {if (o.key == key) obj = o });
    return obj;
  }
  
}

// benchmark using the console
console.time("Set")




let h = new HashList(100);

h.set('hello', 'world');
h.set('d', 'c');
h.set('b', 'sd');
h.set('e', 'asssdf');
h.set('2', 'asdf');
console.log(h.get('hello'));


console.time("Set");