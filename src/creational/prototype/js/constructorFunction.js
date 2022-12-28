function person (name, age) {
  this.name = name;
  this.age = age;
}

const personProrotype = {
  name: 'palo',
  age: 36,
  getAge () {
    return this.age;
  }
};

person.prototype = Object.create(personProrotype);
person.prototype.constructor = person;

function subPerson (name, age) {
  person.call(this, name, age);
  this.fromSub = ' sub';
}

subPerson.prototype = Object.create(person.prototype);
subPerson.prototype.constructor = subPerson;

const person1 = new person('noel', 3000);
console.log(person1.age); //3000

const person2 = new subPerson('joana', 50);

console.log(person2);
