export interface PersonPrototype {
  clone(): PersonPrototype;
}

export class Person implements PersonPrototype {
  public Adresses: Adress[] = [];

  constructor (public name: string, public age: number) {}
  clone (): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAdress (adress: Adress) {
    this.Adresses.push(adress);
  }
}

class Adress {
  constructor (public street: string, public number: number) {}
}

const adress1 = new Adress('av asd', 50);

const person1 = new Person('paulo', 36);
person1.addAdress(adress1);

const person2 = person1.clone();
person2.Adresses[0].street = 'joao';

/*
    neste caso o person 2 faz shadow em person 1 e os dois passam a ter o street de joão
    por se tratar de um ashallow copy
*/
console.log(person1, person2);
