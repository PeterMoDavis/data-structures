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

  markLate() {
    this.tardies++;
    return `Your full name is ${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
}

let peter = new Student('Peter', 'MoDavis');
let kitty = new Student('Kitty', 'Kat', 1);

console.log(kitty.fullName());
console.log(kitty.markLate());
console.log(kitty.markLate());
console.log(kitty.addScore(5));
