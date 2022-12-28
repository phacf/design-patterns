export interface PersonPrototype {
  clone(): PersonPrototype;
}

export class Person implements PersonPrototype {
  public Adresses: Adress[] = [];

  constructor (public name: string, public age: number) {}
  clone (): Person {
    const newObject = new Person(this.name, this.age); // deep copy cria um novo objeto
    newObject.Adresses = this.Adresses.map((item: Adress) => item.clone());
    return newObject;
  }

  addAdress (adress: Adress) {
    this.Adresses.push(adress);
  }
}

class Adress {
  constructor (public street: string, public number: number) {}
  clone (): Adress {
    return new Adress(this.street, this.number);
  }
}

const adress1 = new Adress('av asd', 50);

const person1 = new Person('paulo', 36);
person1.addAdress(adress1);

const person2 = person1.clone();
person2.Adresses[0].street = 'joao';

/*
    usando somente a linguagem é necessario a reciração dos parametros do objeto
    usando lodash seria:
    obj = _.cloneDeep(obj.prorotype) simplesmente
*/
console.log(person1, person2);
