/****
 * visa separar construção de objeto complexo do codigo do cliente para manter codigo mais limpo
 * composição de varios objetos (composite)
 * algoritmo de criação do objeto complexo
 * permite criar objeto em etapas
 * permite method chaining
 * objeto final varia de acordo com a necessidade
 *
 * builder pode ter um director que orquestra a montagem do objeto
 * sendo assim o cliente chama apenas o director que entrega o resultado pronto
 * ****/

class Director {
  construct () {}
}
abstract class Builder {
  buildPart () {}
}
class ConcreteBuilder extends Builder {
  buildPart (): void {}
  getResult () {}
}

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
