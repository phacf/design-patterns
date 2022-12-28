//UML
export class UmaClasse {
  constructor (
    private name: string,
    public sobrenome: string,
    protected idade: number
  ) {}

  public getName () {
    return this.name;
  }

  public getIdade () {
    return this.idade;
  }

  public setNome (name: string) {
    this.name = name;
  }

  public setIdade (age: number) {
    this.idade = age;
  }
}

//herança
export class Shape {}

export class Circle extends Shape {
  // herda todos as caracteristicas de shape
}

//agregação e composição

export class Motor {}
//agregação
export class Carro {
  private motor: any;

  constructor (motor: any) {
    this.motor = motor;
  }
}
const motor = new Motor();
//composição
const carro = new Carro(motor);

//dependencia
/* quando uma classe referencia outra classe dentro do seu corpo*/

export class Printer {
  public print (document: any) {
    console.log(`printing ${document}`);
  }
}

export class Document {}

//REALIZATION

/*quando uma classe implementa uma interface ou uma interface extendendo outra
interface é um contrato para que outras classes implementem seu conteudo*/

export interface ControleRemoto {
  play(): void;
  pause(): void;
}

export interface ControleSom extends ControleRemoto {
  mudarRadio(): void;
}

export class Dvd implements ControleRemoto {
  pause (): void {
    //set pause
  }
  play (): void {
    //set play
  }
}

export class Radio implements ControleSom {
  play (): void {}
  pause (): void {}
  mudarRadio (): void {}
}

//abstração

//toda classe que extender animal tem que criar makeNoise é uma forma de interface mais complexa

export abstract class Animal {
  protected abstract makeNoise (): string;

  makeSound (): void {
    console.log(this.makeNoise());
  }
}

export class Dog extends Animal {
  protected makeNoise (): string {
    return 'au au';
  }
}

const dog = new Dog();
dog.makeSound();

//method chaining
export class Person {
  cosntructor (public name?: string, public age?: number) {}
}
export class PersonBuilder {
  private person = new Person();

  newPerson () {
    this.person = new Person();
  }

  setName (name: string) {
    this.person.name = name;
    return this;
  }

  setAge (age: number) {
    this.person.age = age;
    return this; //retorno da classe permite que encadeie metodos
  }

  getResult (): Person {
    return this.person;
  }
}

const personBuilder = new PersonBuilder();

const person1 = personBuilder
  .setName('paulo')
  .setAge(36)
  .getResult(); //method chaining

personBuilder.newPerson();

const person2 = personBuilder
  .setName('andre')
  .setAge(23)
  .getResult();
