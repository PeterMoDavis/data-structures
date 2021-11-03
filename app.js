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

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUP();
  }
  bubbleUP() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
    return this.values;
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;

      this.sinkDown();
    }

    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);

/*
REMOVING FROM A HEAP
-Remove the root
-Repladce with the most recently added
-Adjust(sink down);

SINK DOWN
The procedure for deleiting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap(also known as bubble-down, percolate-down, sift-down, trickle down, heapify-dwon, cascade-down, and extract-min/max)

WHAT IS A PRIORITY QUEUE?
A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.  
Priority Queues have nothing to do with Heaps.  They are abstract concepts.  Commonly done with a heap.  
*/
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUP();
  }
  bubbleUP() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
    return this.values;
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
    }
  }
}

let ER = new PriorityQueue();

ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

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

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
