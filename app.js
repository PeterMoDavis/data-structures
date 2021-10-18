//Data Structures

//Classes
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  //Instance Methods
  markLate() {
    this.tardies++;
    return `Your full name is ${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
  //Class Methods
  static EnrollStudents() {
    return 'ENROLLING STUDENTS';
  }
}

let peter = new Student('Peter', 'MoDavis');
let kitty = new Student('Kitty', 'Kat', 1);

// console.log(kitty.fullName());
// console.log(kitty.markLate());
// console.log(kitty.markLate());
// console.log(kitty.addScore(5));
// console.log(kitty.addScore(6));
// console.log(kitty.addScore(7));
// console.log(kitty.addScore(8));
// console.log(Student.EnrollStudents());
// console.log(kitty.calculateAverage());

//SINGLY LINKED LIST
//A data structure that contains a head, tail and length property.
//A list consists of nodes, and each node has a value and a pointer to another node or null.
//EACH NODE IS ONLY ONE DIRECTIONALLY TO THE NEXT NODE

//COMPARISONS WITH ARRAYS
//*************************************************** */
//LISTS
//Do not have indexes!
//Connected via nodes with a next pointer
//Random access is not allowed
//******************************************* */
//ARRAYS
//Indexed in order!
//Insertion and deletion can be expensive
//Can quickly be accessed at a specific index
//******************************************************** */
// piece of data  - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

// var first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

let list = new SinglyLinkedList();
list.push('HELLO');
list.push('there');
list.push('Bobby');

console.log(list.head.next.next);
// list.push('GOODBYE');
