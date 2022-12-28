/****
 * Especififcar os tipos de objetos a serem criados usando uma instancia-prototipo e criando novos objetos
 * a partir da copia deste
 * quando o codigo não depende de classes concretas para a criação de novos objetos
 * usado para evitar a explosão de subclasses para objetos muito parecidos
 * evita a criação de objetos caros
 * *****/

interface Prototype {
  clone(): Prototype;
}

class Person implements Prototype {
  constructor (public name: string, public age: number) {}

  clone (): this {
    //não é um clone
    //é um novo objeto criado com este mesmo como prototipo
    const newPerson = Object.create(this);
    return newPerson;
  }
}

const person1 = new Person('paulo', 36);

const person2 = person1.clone();

console.log(person1.name); //paulo
console.log(person2.name); //paulo

console.log(person1 === person2); //false
