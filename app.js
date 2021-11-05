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

/*
INSERTING A NODE
Steps- Iteratively of Recursively
-Create a new node
-Starting at the root
-Check if there is a root, if not-the root now becomes that new model.
-If there is a root, check if the value of the new node is greater than or less than the value of the root.
-If it is greater:
-Check to see if there is a node to the right
-if there is move to that node and repeat theses steps
-if there  is not add that node as the right property
-If it is less:
-Check to see if there is a node to the left
-If there is, move to that node and reepeat these steps.
-If there is not, add that node as the left property.  
*/

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     var newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     } else {
//       var current = this.root;
//       while (true) {
//         if (value === current.value) return undefined;
//         if (value < current.value) {
//           if (current.left === null) {
//             current.left = newNode;
//             return this;
//           } else {
//             current = current.left;
//           }
//         } else if (value > current.value) {
//           if (current.right === null) {
//             current.right = newNode;
//             return this;
//           } else {
//             current = current.right;
//           }
//         }
//       }
//     }
//   }
//   contains(value) {
//     if (this.root === null) return false;
//     let current = this.root,
//       found = false;
//     while (current && !found) {
//       if (value < current.value) {
//         current = current.left;
//       } else if (value > current.value) {
//         current = current.right;
//       } else {
//         return true;
//       }
//     }

//     return false;
//   }
//   BFS() {
//     let node = this.root,
//       data = [],
//       queue = [];

//     queue.push(this.root);
//     while (queue.length) {
//       node = queue.shift();
//       data.push(node.value);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     return data;
//   }

//   DFSPreOrder() {
//     var data = [];
//     function traverse(node) {
//       data.push(node.value);
//       if (node.left) traverse(node.left);
//       if (node.right) traverse(node.right);
//     }
//     traverse(this.root);
//     return data;
//   }
//   DFSPostOrder() {
//     var data = [];
//     function traverse(node) {
//       if (node.left) traverse(node.left);
//       if (node.right) traverse(node.right);
//       data.push(node.value);
//     }
//     traverse(this.root);
//     return data;
//   }
//   DFSInOrder() {
//     var data = [];
//     function traverse(node) {
//       if (node.left) traverse(node.left);
//       data.push(node.value);
//       if (node.right) traverse(node.right);
//     }
//     traverse(this.root);
//     return data;
//   }
// }

// var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);

/*
Big O of BST
only Binry Search Trees!!!
Insertion - O(log n)
Searching - O(log n)

not quaranteed!
*/

/*
TRAVERSING A TREE
Two ways;
-Breadth-first Search (working across the tree horizontally)
-Depth-first Search (Vertically Down)
*/

/*
WHICH IS BETTER
BFS or DFS ?
If the tree is huge the Breadth First queue will have to store tons of data in the queue.  Space Complexity could be a lot more.  

Depth First uses less space.  Each piece of data is a frame in the call stack because of recursion. 

Time Complexity is the same.  Wide trees take more space for Breadth First, Deep trees take more space for Depth First. 

RECAP
-Trees are non-linear data structures that contain a root and child nodes.
-Binary Trees can have values of any type, but at most two children for each parent.
-Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the ritght is greater. 
-We can search through Trees using BFS and DFS. 
*/

/*
HEAPS
(A CATEGORY OF TREES)
WHAT IS A BINARY HEAP?
Very similar to a binary search tree but with some different rules!
In a MAX BINARY HEAP, parent nodes are always larger than child nodes.  In a MIN BINARY HEAP, parent nodes are alwasy smaller than child nodes.  Left and right doesn't matter.  

MAX BINARY HEAP
-Each parent has at most two child nodes.
-The value of each parent node is always greater then it's child nodes.
-In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.  
-A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are fillout out first.  

REPRESENTING HEAPS
Could implement a Tree Class.  

Can represent a heap with arrays:  

children can be found by 2n + 1 for the Left Side and 2n + 2 for the right side n being the index in the array.  
parents can be fount by n-1/2 floored.   

ADDING TO A MAZ BINARY HEAP
-Add to the end
-Bubble up
*/

// class MaxBinaryHeap {
//   constructor() {
//     this.values = [];
//   }
//   insert(element) {
//     this.values.push(element);
//     this.bubbleUP();
//   }
//   bubbleUP() {
//     let idx = this.values.length - 1;
//     const element = this.values[idx];
//     while (idx > 0) {
//       let parentIdx = Math.floor((idx - 1) / 2);
//       let parent = this.values[parentIdx];
//       if (element <= parent) break;
//       this.values[parentIdx] = element;
//       this.values[idx] = parent;
//       idx = parentIdx;
//     }
//     return this.values;
//   }
//   extractMax() {
//     const max = this.values[0];
//     const end = this.values.pop();
//     if (this.values.length > 0) {
//       this.values[0] = end;

//       this.sinkDown();
//     }

//     return max;
//   }
//   sinkDown() {
//     let idx = 0;
//     const length = this.values.length;
//     const element = this.values[0];
//     while (true) {
//       let leftChildIdx = 2 * idx + 1;
//       let rightChildIdx = 2 * idx + 2;
//       let leftChild, rightChild;
//       let swap = null;

//       if (leftChildIdx < length) {
//         leftChild = this.values[leftChildIdx];
//         if (leftChild > element) {
//           swap = leftChildIdx;
//         }
//       }
//       if (rightChildIdx < length) {
//         rightChild = this.values[rightChildIdx];
//         if (
//           (swap === null && rightChild > element) ||
//           (swap !== null && rightChild > leftChild)
//         ) {
//           swap = rightChildIdx;
//         }
//       }
//       if (swap === null) break;
//       this.values[idx] = this.values[swap];
//       this.values[swap] = element;
//     }
//   }
// }

// let heap = new MaxBinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);
// console.log(heap.values);
// console.log(heap.extractMax());
// console.log(heap.values);

// /*
// REMOVING FROM A HEAP
// -Remove the root
// -Repladce with the most recently added
// -Adjust(sink down);

// SINK DOWN
// The procedure for deleiting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap(also known as bubble-down, percolate-down, sift-down, trickle down, heapify-dwon, cascade-down, and extract-min/max)

// WHAT IS A PRIORITY QUEUE?
// A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.
// Priority Queues have nothing to do with Heaps.  They are abstract concepts.  Commonly done with a heap.
// */
// class Node {
//   constructor(val, priority) {
//     this.val = val;
//     this.priority = priority;
//   }
// }
// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(val, priority) {
//     let newNode = new Node(val, priority);
//     this.values.push(newNode);
//     this.bubbleUP();
//   }
//   bubbleUP() {
//     let idx = this.values.length - 1;
//     const element = this.values[idx];
//     while (idx > 0) {
//       let parentIdx = Math.floor((idx - 1) / 2);
//       let parent = this.values[parentIdx];
//       if (element.priority >= parent.priority) break;
//       this.values[parentIdx] = element;
//       this.values[idx] = parent;
//       idx = parentIdx;
//     }
//     return this.values;
//   }
//   dequeue() {
//     const min = this.values[0];
//     const end = this.values.pop();
//     if (this.values.length > 0) {
//       this.values[0] = end;
//       this.sinkDown();
//     }

//     return min;
//   }
//   sinkDown() {
//     let idx = 0;
//     const length = this.values.length;
//     const element = this.values[0];
//     while (true) {
//       let leftChildIdx = 2 * idx + 1;
//       let rightChildIdx = 2 * idx + 2;
//       let leftChild, rightChild;
//       let swap = null;

//       if (leftChildIdx < length) {
//         leftChild = this.values[leftChildIdx];
//         if (leftChild.priority < element.priority) {
//           swap = leftChildIdx;
//         }
//       }
//       if (rightChildIdx < length) {
//         rightChild = this.values[rightChildIdx];
//         if (
//           (swap === null && rightChild.priority < element.priority) ||
//           (swap !== null && rightChild.priority < leftChild.priority)
//         ) {
//           swap = rightChildIdx;
//         }
//       }
//       if (swap === null) break;
//       this.values[idx] = this.values[swap];
//       this.values[swap] = element;
//     }
//   }
// }

// let ER = new PriorityQueue();

// ER.enqueue('common cold', 5);
// ER.enqueue('gunshot wound', 1);
// ER.enqueue('high fever', 4);
// ER.enqueue('broken arm', 2);
// ER.enqueue('glass in foot', 3);

/*
Big O of Binary Heaps
LOG(N)

RECAP 
-Binary Heap which is a type of a heap which is a type of tree.
Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues.  
-Binary Heaps are either Max Binary Heaps or Min binary Heaps with parents either being smaller or larger than children.
-Binary Heaps are filled out from left to right, every node is filled.
-With just a little bit of math we can represent heaps using arrays.  
*/

/*
HASH TABLES
WHAT IS A HASH TABLE? 
Hash tables are used to store key-value pairs.
They are like arrays, but the keys are not ordered.
Unlike arrays, hash tables are fast for all the following operations: finding values, adding new values, and removing values!

Nearly every programming language has some sort of hash table data structure 

Because of their speed, hash tables are very commonly used!

HASH TABLES IN THE WILD

Python has Dictionaries
JS has Objects and Maps
Java, GO and Scala have Maps
Ruby has... Hashes

*Objects have some restrictions, but are basically hash tables. 

The Hash Part
To implement a hash table, we'll be using an array.
In order to look up values by key, we need a way to convert keys into valid arrray indices.  
A function that performs this task is called a hash function.

WHAT MAKES A GOOD HASH? 
(not a cryptographically secure one)

1. Fast(i.e. constant time)
2. Doesn't clust er outputs at specific indices, but distributes uniformly
3. Deterministic (same input yields same output)

PRIME NUMBERS? WUT.

The prime number in the hash is helpful in spreading out the keys more uniformly.

It's also helpful if the array that you're putting values into has a  prime length;

You don't need to know why.  (Math is complicated!)
But here are some links if your curious.  

Dealing with Collisions

Even with a large array and a great hash function, collisions are inevitable.

There are many strategies for dealing with collisions, but we'll focus on two:

1. Separate Chaining  - stroing values at the same index with a nested data structure.
2. Linear Probing - if the index already has a value go past it and search of the next empty index.  

Set/Get

set
1.Accepts a key and a value
2.Hashes the key
3. Stores the key value pair in the hash table array via separate chaining.

get
1.Accepts a key
2. Hashes the key
3. Retrieve3s the key-value pair in the hash table
4. If the key isn't found, returns undefined.
*/

function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.set('purple', '#DDA0DD');
ht.set('violet', '#DDA0DD');
console.log(ht.keyMap);

/* 
BIG O OF HASH TABLES
(average case)

-Insert O(1);
-Deletion O(1);
-Acess O(1)

RECAP 
-hash tables are collections of key-value pairs
-hash tables can find values quickly given a key
-hash tables can add new key-values quickly
-hash tables store data in a large array, and work by hashing the keys 
-a god hash should be fast, distribute keys uniformly,
and be deterministic
Separate chaining and linear probing are two strategis used to deal with two keys that hash to the same index
*/

/* 
WHAT ARE GRAPHS
A graph data structure consists of a finite (and possible mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a  directed graph.  

(a collection of NODES  and CONNECTIONS)


USES FOR GRAPHS

-Social Networks
-Location/Mapping
-Routing Algorithms
-Visual Hierarchy
-File System Optimaztions
-Everywhere!

RECOMMENDATIONS
-"People also watched"
-"You might also like..."
"People you might know"
-"Frequently bought with"

TYPES OF GRAPHS

ESSENTIAL GRAPH TERMS
-Vertix - a node
-Edge - connection between nodes
- Weighted/Unweighted - values assigned to distances between vertices

A tree is an undirected graph in which any two vertices are connected by exactly one path.

UNDIRECTED GRAPH
There is no direction or polarity to the edges.  A and B are a connection but so are B to A.  

DIRECTED GRAPH 
Often represented with arrows.  A and b are a connection but b to a may not be.  

WEIGHTED GRAPH
Assigning values to the edge.
For instance in google maps edges are weighted to see the shortest distance.  
Picture a one way street would mean a directed graph.   

REPRESENTING A GRAPH
Two standard approaches on how to represent graph
-Adjacency Matrix
-Adjacency List

ADJACENCY LIST
-Can take up less space (in sparse graphs).
-Faster to iterate over all edges
-Can be slower to look up specific edge

Adjacency Matrix
-Takes up more space (in sparse graphs).
-Slower to iterate over all edges
-Faster to look up specific edge

WHAT WILL WE USE

An Adjacency List

Why? 
Most data in the real-world tends to lend itself to sparser and/or larger graphs.  


WE ARE BUILDING AN UNDIRECTED GRAPH

GRAPH TRAVERSAL

Visiting/Updating/Checking
each vertex in a graph


GRAPH TRAVERSAL USES

-Peer to peer networking
-Web crawlers
-Finding "closest"
matches/recommendations
-Shortest path problems
    -GPS Navigation
    -Solving mazes
    -AI (shortest path to win the game)

    DEPTH FIRST TRAVERSAL

    There is no root node as there is in a tree.  

    BREADTH FIRST TRAVERSAL
  Vistit neightbors at current depth first!

*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex];
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!vsited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log(g.depthFirstRecursive('A'));
console.log(g.depthFirstIterative('A'));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

/* 
Dijkstras's Shortes Path Algorithm

WHAT IS IT
One of the most famous and widely used algorighms around.
Finds the shortest path between two vertices on a graph.
Whats the fastes way to get from point A to point B?

WHO WAS HE? 

Edsger Dijkstra was a Dutch programmer, physicist, essayis, and all around smarty-pants
He helped to advance the field of computer science from an "art" to an academic discipline
Many of his discoveries and algorithims are still commonly used to this day.

WHY IS IT USEFUL?
-GPS - finding fastest route
-Network Routing - finds open shortest path for data
-Biology - used to model the spread of viruses among humans
-Airline Tickets - finding cheapest route to your destination
-Biology - used to model the spread of viruses among humnans
-Many other uses!
*/

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.Dijkstra('A', 'E');

// ["A", "C", "D", "F", "E"]

/* 
THE APPROACH
1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
2. Once we've moved to the node we're going to visit, we look at each of it's neighbors.
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node.
4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node. 

DYNAMIC PROGRAMMING
A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

It only works on problems with optimal substructure & overlapping subproblems.

OVERLAPPING SUBPROBLEMS
A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times.

OPTIMAL SUBSTRUCTURE
A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems

*/

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

/* 
Big O of ^ fib function
O(2^n)

What can we improve
We're repeating things!
Using past knowledge to make a future problem easier.  

MEMOIZATION
Storing the results of expensive function calls and returning the cached result when the same inputs occur again
*/

function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

/* 
We've Been Working Top Down.
but there's another way
Bottom-up!

TABULATION
Storing the result of a previous result in a 'table' (usually an array)

Usually done using iteration

Better space complexity can be achieved using tabulation
*/

function fib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

/* 
Quick Sort
-Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted.
-Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array. 
-Once the pivot is positioned approprately, quick sort can be applied on either side of the pivot. 
*/

function pivot(arr, start = [0], end = arr.length - 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // 2
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

/* 
COMPARISON SORTS 
Average Time Complexity
-Bubble sort - O(n^2)
-Insertion Sort - O(n2)
-Selection Sort - O(n^2)
-Quick sort - O(n log(n))
-Merge sort - O(n log(n))
Can we do better?  

Yes we can but not by making comparisons.  

RADIX SORT
Not making comparisons

Radix sort is a special sorting algorithm that works on lists of numbers
It never makes comparisons between elements!
It exploits the fact that information about the size of a number is encoded in the number of digits.

*/

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(getDigit(7323, 2));
