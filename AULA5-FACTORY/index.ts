/****
 * define uma interface para criar um objeto mas deixa as subclasses decidirem qual classe instanciar
 * permite adiar a instanciação para as subclasses
 * pode ou não ser abstrato
 * são operações que criam objetos
 *
 * oculta a logica de criação do objeto
 * é obtido atraves de herança, pode ser criado ou subrescrito por subclasses
 * permite a criação de novas factories sem necessidade da alteração do codigo ja escrito (open & close principle)
 * pode usar parametros para determinar o tipo de objeto a ser criado ou passa eles aos objetos a serem criados
 * usar quando não souber com certeza quais tipos de obj o codigo vai precisar
 * usar para permitira extensão de factories para criação de novos objetos
 * usar para desacoplar o codigo que cria do codigo que usa as classes
 * usar para permitir que as subclasses decidam a logica de criação de objetos
 * usar para eliminar a duplicação de codigo na criação de objetos
 ****/

type Car = {
  model: string;
  motor: string;
};

type CarPrototype = {
  showDetails(): void;
};

const carPrototype: CarPrototype = {
  showDetails () {
    console.log(this);
  }
};

const carFactory = (model: string, motor: string): Car & CarPrototype => {
  const idAsPrivateMember = Math.floor(Math.random() * 1000);

  const carObj = Object.create(carPrototype);

  return Object.assign(carObj, { id: idAsPrivateMember, model, motor });
};

const car1 = carFactory('fusca', 'v8');
const car2 = carFactory('opala', 'v12');

console.log(car1, car2); //{ id: 435, model: 'fusca', motor: 'v8' } { id: 737, model: 'opala', motor: 'v12' }

interface Product {
  saiHi(): void;
}

abstract class Creator {
  abstract factoryMethod (): Product;

  createAndShow () {
    const product = this.factoryMethod();
    console.log(product);
  }
}

class ConcreteProduct implements Product {
  saiHi (): void {
    console.log('hi');
  }
}

class ConcreteCreator extends Creator {
  factoryMethod (): Product {
    return new ConcreteProduct();
  }
}

const creator = new ConcreteCreator();
const product = creator.factoryMethod();

product.saiHi();

creator.createAndShow();
