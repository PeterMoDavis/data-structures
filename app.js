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
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
// DoublyLinkedList
// --head
// --tail
// --length

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new DoublyLinkedList();

list.push('FIRST');
list.push('SECOND');
list.push('THIRD');
list.push('FOURTH');
