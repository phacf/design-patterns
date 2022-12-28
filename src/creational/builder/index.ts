import { DishBuilder } from './classes/dish-builder';

const mainDishBuilder = new DishBuilder();
mainDishBuilder.makeMeal().makeDessert();

console.log(mainDishBuilder.getPrice());
