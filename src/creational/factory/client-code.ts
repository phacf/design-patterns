import { randomNumbers } from './factories/utils/random-numbers';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';

const customerNames = ['paulo', 'joao', 'ana'];

for (let i = 0; i < 10; i++) {
  const car = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  car.pickUp(name);
}
