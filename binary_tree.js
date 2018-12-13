// 'use strict';
// 
// class Node {
//   constructor(val, next) {
//     this.value = val;
//     this.next = next;
//   }
// }
// 
// 
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
// 
//   add(val) {
//     let nn = new Node(val);
//     nn.next = this.head;
//     this.head = nn;
//     if ( this.head.next == null) {
//       this.tail = this.head;
//     }
//   }
// 
//   traverse(fun) {
//     let current = this.head;
//     while (current) {
//       fun(current.value);
//       current = current.next;
//     }
//   }
// 
//   // removes all nodes that have the input value
//   remove(val) {
//     let current = this.head;
// 
//     if (val == current.value) {
//       this.head = current.next;
//       if (!this.head) return
//     }
// 
//     while(current.next.next) {
//       if (val == current.next.value) {
//         current.next = current.next.next;
// 
//       }
//       current = current.next;
//     } 
//   }
// }
// 
// 
// class Queue() {
//   constructor(list){
//     this.list = list;
//   }
// 
//   //adds new elements to tail (first in)
//   enqueue (val) {
//     let nn = new Node(val);
//     this.list.tail.next = nn;
//     this.list.tail = nn;
//   }
// 
//   //removes from tail (first out)
//   dequeue () {
//     currentHead = this.list.head;
//     this.list.head = currentHead.next;
//     return currentHead.value;
//   }
// 
//   peek () {
//     this.list.head.value;
//   }
// 
//   isEmpty () {
//     return !this.list.head.value;
//   }
// }
// 
// 
// 
// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// 
// 
// 
// class BinaryTreeNode {
//   constructor(val = null) {
//     this.left = null;
//     this.right = null;
//     this.value = val;
//   }
// 
//   preOrderTraverse(cb) {
//     cb(this.value); // cb called first
//     if (this.left){ this.left.preOrderTraverse(cb) };
//     if (this.right){  this.right.preOrderTraverse(cb) };
//      // this returns undefined since there's no explicit return
//   }
// 
//   inOrderTraverse(cb) {
//     if (this.left){ this.left.inOrderTraverse(cb) };
//     cb(this.value); //  cb called in between 
//     if (this.right){  this.right.inOrderTraverse(cb) };
//     // this returns undefined since there's no explicit return
//   }
// 
//   postOrderTraverse(cb) {
//     if (this.left){ this.left.postOrderTraverse(cb) };
//     if (this.right){  this.right.postOrderTraverse(cb) };
// 
//      cb(this.value); // cb called at end
//      // this returns undefined since there's no explicit return
//   }
// }
// 
// class BinaryTree {
//   constructor() {
//     this.root = new BinaryTreeNode();
//   }
// 
//   breadthFirst(cb) {
//     list = new LinkedList;
//     let q = new Queue(list);
//     q.enqueue(this.root);
// 
//     while(!q.isEmpty()) {
//       let n = q.dequeue();
//       cb(n);
//       if (n.left) q.enqueue(n.left);
//       if (n.right) q.enqueue(n.right);
//     }
//   }// breadthFirst
// }// BinaryTree
// 
// let b = new BinaryTree();
// 
// b.root.value = 11;
// 
// ///////////
// // Manually set nodes
// //////////
// 
// b.root.left = new BinaryTreeNode(98);
// b.root.right = new BinaryTreeNode(77);
// 
// b.root.left.right = new BinaryTreeNode(1);
// b.root.left.left = new BinaryTreeNode(9);
// 
// b.root.left.left.left = new BinaryTreeNode(32398);
// b.root.left.left.right = new BinaryTreeNode(32334234298);
// 
// 
// 
// // console.log(b.root);
// // b.root.preOrderTraverse(console.log);
// 
// b.breadthFirst(console.log);




'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  traverse(proc) {
    let current = this.head;
    while (current) {
      proc(current);
      current = current.next;
    }
  }
}

class Queue {
  constructor(line) {
    this.list = line;
  }

  enqueue(val) {
    let node = new Node(val);
    if (!this.list.head) {
      this.list.head = node;
      this.list.tail = node;
    } else {
      this.list.tail.next = node;
      this.list.tail = node;
    }
  }

  dequeue() {
    let remove = this.list.head;
    this.list.head = remove.next;
    return remove.value;
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return !this.list.head;
  }
}


class BinaryTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
  
  //recursive add function
  add(val) {
    if ( val < this.value  ) {
      if (this.left) this.left.add(val);
      else this.left = new BinaryTreeNode(val);
    } else {
      if(this.right) this.right.add(val);
      else this.right = new BinaryTreeNode(val);
    }
  }
  
  postOrderTraverse(cb) {
    if (this.left) this.left.postOrderTraverse(cb);
    if (this.right) this.right.postOrderTraverse(cb);
    cb(this.value);
  }
  preOrderTraverse(cb) {
    cb(this.value);
    if (this.left) this.left.preOrderTraverse(cb);
    if (this.right) this.right.preOrderTraverse(cb);
  }
  inOrderTraverse(cb) {
    if (this.left) this.left.inOrderTraverse(cb);
    cb(this.value);
    if (this.right) this.right.inOrderTraverse(cb);
  }

}

class BinaryTree {
  constructor() {
    this.root = new BinaryTreeNode();
  }
  
  //should add to left if lower, to right if higher
  // add(val) {
  // 
  //   current = this.root;
  // 
  //   while ( !current.left && current.right ) {
  // 
  //     if (val <= current) {
  //       if (current.left) {
  //         current=current.left
  //       } else {
  //         current.left = BinaryTreeNode(val);
  //       }
  //     }
  // 
  // 
  //     if (val > current.right) {
  // 
  //     }
  //   }
  // 
  // 
  // }
  
  
  add (val) {
    this.root.add(val);
  }
  
  breadthFirstTraversal(cb) {
    let q = new Queue( new LinkedList);
    q.enqueue(this.root);
    while(!q.isEmpty()) {
      let n = q.dequeue();
      cb(n.value);
      if (n.left) q.enqueue(n.left);
      if (n.right) q.enqueue(n.right);
    }
  }
}

let b = new BinaryTree();

b.root.value = 100;
b.add(3);
b.add(6);
b.add(1);
b.add(556);
b.add(9988);
// b.root.left = new BinaryTreeNode("left");
// b.root.right = new BinaryTreeNode("right");
// b.root.left.left = new BinaryTreeNode("left left");
// b.root.left.right = new BinaryTreeNode("left right");
// b.root.right.left = new BinaryTreeNode("right left");
// b.root.right.right = new BinaryTreeNode("right right");

b.root.inOrderTraverse(console.log);

// b.breadthFirstTraversal(console.log);

