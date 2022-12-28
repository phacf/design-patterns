const person = {
  name: 'palo',
  age: 36,
  getAge () {
    return this.age;
  }
};

const other = Object.create(person);
console.log(other) //{}

/** 
 * quando vc acessa uma propriedade que não existe no objeto ele é delegado para o prototype
 * se for delegado ao novo objeto um parametro ja existente como name 
 * o js faz o shadow que 'sobrescreve' o valor do prorotype e passa a existir no novo objeto
 * **/