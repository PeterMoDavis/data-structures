//Data Structures

//Classes
// class Student {
//   constructor(firstName, lastName, year) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.grade = year;
//     this.tardies = 0;
//     this.scores = [];
//   }
//   fullName() {
//     return `Your full name is ${this.firstName} ${this.lastName}`;
//   }
//   //Instance Methods
//   markLate() {
//     this.tardies++;
//     return `Your full name is ${this.firstName} ${this.lastName} has been late ${this.tardies}`;
//   }

//   addScore(score) {
//     this.scores.push(score);
//     return this.scores;
//   }
//   calculateAverage() {
//     let sum = this.scores.reduce((a, b) => a + b);
//     return sum / this.scores.length;
//   }
//   //Class Methods
//   static EnrollStudents() {
//     return 'ENROLLING STUDENTS';
//   }
// }

// let peter = new Student('Peter', 'MoDavis');
// let kitty = new Student('Kitty', 'Kat', 1);

// // console.log(kitty.fullName());
// // console.log(kitty.markLate());
// // console.log(kitty.markLate());
// // console.log(kitty.addScore(5));
// // console.log(kitty.addScore(6));
// // console.log(kitty.addScore(7));
// // console.log(kitty.addScore(8));
// // console.log(Student.EnrollStudents());
// // console.log(kitty.calculateAverage());

// //SINGLY LINKED LIST
// //A data structure that contains a head, tail and length property.
// //A list consists of nodes, and each node has a value and a pointer to another node or null.
// //EACH NODE IS ONLY ONE DIRECTIONALLY TO THE NEXT NODE

// //COMPARISONS WITH ARRAYS
// //*************************************************** */
// //LISTS
// //Do not have indexes!
// //Connected via nodes with a next pointer
// //Random access is not allowed
// //******************************************* */
// //ARRAYS
// //Indexed in order!
// //Insertion and deletion can be expensive
// //Can quickly be accessed at a specific index
// //******************************************************** */
// // piece of data  - val
// //reference to next node - next

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     var newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }

//   shift() {
//     if (!this.head) return undefined;
//     let currentHead = this.head;
//     this.head = currentHead.next;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return currentHead;
//   }
//   unshift(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }

//     this.length++;
//     return this;
//   }

//   get(index) {
//     if (index < 0 || index >= this.length) {
//       return 'ya blew it ya idiot those are outside bounds!!';
//     }
//     let counter = 0;
//     let current = this.head;

//     while (counter !== index) {
//       current = current.next;
//       counter++;
//     }
//     return current;
//   }
//   set(index, val) {
//     let foundNode = this.get(index);
//     if (foundNode) {
//       foundNode.val = val;
//       return true;
//     }
//     return false;
//   }

//   insert(index, val) {
//     if (index < 0 || index > this.length) return false;
//     if (index === this.length) return !!this.push(val);
//     if (index === 0) return !!this.unshift(val);

//     let newNode = new Node(val);
//     let prev = this.get(index - 1);
//     let temp = prev.next;
//     newNode.next = temp;
//     this.length++;
//     return true;
//   }

//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if (index === this.length - 1) return this.pop();
//     if (index === 0) return this.shift();
//     let previousNode = this.get(index - 1);
//     let removedNode = previousNode.next;
//     previousNode.next = removedNode.next;
//     this.length--;
//     return removedNode;
//   }
//   //***************************************************** */\
//   //GO OVER THIS !!!!!!!!!!!!!!!!!!!!!!!
//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     let prev = null;
//     let next;

//     for (let i = 0; i < this.length; i++) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//     return this;
//   }
//   //GO OVER THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   //***************************************************** */

//   print() {
//     let arr = [];
//     let current = this.head;
//     while (current) {
//       arr.push(current.val);
//       current = current.next;
//     }
//     console.log(arr);
//   }
// }

// var first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

// let list = new SinglyLinkedList();
// list.push('FIRST');
// list.push('SECOND');
// list.push('THIRD');
// list.push('FOURTH');

// list.push('GOODBYE');

//BIG O of Singly Linked Lists

// Insertion- O(1)
// Removal - It depends... REmoving from the front O(1) or Removing from the end O(N);
// Searching - O(N)
// Acess- O(N)

//RECAP
//Singly Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required.
//Arrays contan a built in index whereas Linked Lists do not.
//The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues.

//Doubly Linked List
// Node
// --val
// --next
// --prev
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }
// // DoublyLinkedList
// // --head
// // --tail
// // --length

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (!this.head) return undefined;
//     let currentTail = this.tail;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail = currentTail.prev;
//       this.tail.next = null;
//       currentTail.prev = null;
//     }
//     this.length--;
//     return currentTail;
//   }

//   shift() {
//     if (this.length === 0) return undefined;
//     let oldHead = this.head;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = oldHead.next;
//       this.head.prev = null;
//       oldHead.next = null;
//     }
//     this.length--;
//     return oldHead;
//   }
//   unshift(val) {
//     let newNode = new Node(val);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.head.prev = newNode;
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     let count, current;
//     if (index <= this.length / 2) {
//       count = 0;
//       current = this.head;
//       while (count !== index) {
//         current = current.next;
//         count++;
//       }
//     } else {
//       count = this.length - 1;
//       current = this.tail;
//       while (count !== index) {
//         current = current.prev;
//         count--;
//       }
//     }
//     return current;
//   }
//   set(index, val) {
//     let foundNode = this.get(index);
//     if (foundNode) {
//       foundNode.val = val;
//       return true;
//     } else {
//       return false;
//     }
//   }
//   insert(index, val) {
//     if (index < 0 || index > this.length) return false;
//     if (index === 0) return !!this.unshift(val);
//     if (index === this.length) return !!this.push(val);

//     let newNode = new Node(val);
//     let beforeNode = this.get(index - 1);
//     let afterNode = beforeNode.next;

//     beforeNode.next = newNode;
//     (newNode.prev = beforeNode), (newNode.nex = afterNode);
//     afterNode.prev = newNode;
//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if (index === 0) return this.shift();
//     if (index === length - 1) return this.pop();

//     let foundNode = this.get(index);
//     let prevNode = foundNode.prev;
//     let nextNode = foundNode.next;
//     prevNode.next = nextNode;
//     nextNode.prev = prevNode;
//     foundNode.next = null;
//     foundNode.prev = null;
//     this.length--;
//     return foundNode;
//   }
// }

// let list = new DoublyLinkedList();

// list.push('FIRST');
// list.push('SECOND');
// list.push('THIRD');
// list.push('FOURTH');
// list.push('FIFTH');
// list.push('SIXTH');
// list.push('SEVENTH');
// list.push('EIGHTH');
// list.push('NINTH');
// list.push('TENTH');
// list.push('ELEVETH');
// list.push('TWELFTH');

// Big O of Doubly Linked Lists
//Insertion - O(1)
//Removal - 0(1)
//Searching 0(n)
//Access o(n)

//Technically seareching is O(n/2), but thats still O(n);

//RECAP

//Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes
//Better than Singly Linked Lists for finding nodes and cand be done in half the time.
//However, they do take up more memory considering the extra pointer.
//*********************************************************** */
//STACKS
//A LIFO data structure !

//The last element added to the stack will be the fist element removed from the stack.  the first thing to be added will be the last to remove.

//Where Stacks are Used
//Managing function invocations
//Undo/Redo
//Routing(the history object) is treated like a stack!

//ARRAY IMPLEMENTATION
//use push and pop
//or
//unshift and shift (less efficient)
//Stacks don't need indeces

//Stack as a Singly Linked List
//Add and Subtract from the front because it is constant time.

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   push(val) {
//     var newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       var temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     return ++this.size;
//   }

//   pop() {
//     if (!this.first) return null;
//     var temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

// let newStack = new Stack();
// newStack.push('gary');
// newStack.push('randy');
// newStack.push('bobbie');
// newStack.push('george');
/*
BIG O of STACKS!
Insertion - O(1)
Removal - O(1)
Searching- O(N) DOESN'T MATTER
Access - O(N) DOESN'T MATTER
*/

/*
RECAP
-Stacks are a LIFO data structure where the last value in is always the first one out.
-Stacks are used to handle function invocations (the call stack), for operations like undo/ redo, and for routing (remember pages you have visited and go back/forward) and much more!
-They are not a built in data structure in JavaScript, but are relatively simple to implement
*/

/*
Queues
What is a Queue
A FIFO data structure!
First In First Out

Queuees exist everywhere! Think about the last time you waited in line.
How do we use them in programming?
-Background tasks
-Uploading resources
-Printing/Task processing
*/

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   enqueue(val) {
//     var newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     return ++this.size;
//   }

//   dequeue() {
//     if (!this.first) return null;
//     let temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

// let q = new Queue();
// q.enqueue('FIRST');
// q.enqueue('SECOND');
// q.enqueue('THIRD');
// q.enqueue('FOURTH');

/* 
BIG O of QUEUES
Insertion - O(1)
Removal - O(1)
Searching- O(N) DOESN'T MATTER
Access- O(N) DOESN'T MATTER


RECAP
-Queues are a FIFO data structure, all elements are first in first out.
-Queues are useful for processing tasks and are foundational for mopre complex data structures
-Insertion and Removal can be done in O(1)
*/

//WHAT IS A TREE
//A data structure that consists of nodes in a PARENT/CHILD relationship

//LISTS - Linear
//Trees - nonlinear
//A linked list could be considered a specific kind of linear tree.
//It is not a tree when branches reference other brandches that aren't their children.
//Every node is moving down and away from the root node.
//If there is more than one entry point or root node  it is not a tree.

/*
TREE TERMINOLOGY
Root-The top node in a tree
Child- A node directly connected to another node when moving away from the root.
Parent-The converse notion of a child.
Siblings-A group of nodes with the same parent.
Leaf-A node with no children.
Edge-the connection between one node an another.
*/

//Trees - Different Applications
//-HTML DOM
//-Network Routing
//-Abstract Syntax Tree
//-Artificial Intelligence (Decision Tree)
//-Folders are modeled in an operating system is a Tree.
//-JSON- when you parse JSON it creates a tree structure.

//Different Kinds of Trees
//-Trees
//-Binary Trees
//-Binary Search Trees

//BINARY TREES
//-Each node can have a most, TWO CHILDREN.

//BINARY SEARCH TREE
//-Trees
//-Each node can have at most, TWO CHILDREN.
//-Every node to the left of  a parent node is always elss than the parent.
//-Every node to the right of a parent node is always greater than the parent.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
