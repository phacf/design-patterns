import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { ComposedMeal } from './composed-meal';
import { Bean, Beverage, Dessert, Meat, Rice } from './meal';

export class DishBuilder implements MealBuilderProtocol {
  private _meal: ComposedMeal = new ComposedMeal();
  makeBeverage (): this {
    const beverage = new Beverage('cerveja', 6);
    this._meal.add(beverage);
    return this;
  }
  makeDessert (): this {
    const dessert = new Dessert('sorvete', 10);
    this._meal.add(dessert);
    return this;
  }
  makeMeal (): this {
    const rice = new Rice('arroz', 5);
    const meat = new Meat('carne', 50);
    const bean = new Bean('feijao', 4);

    this._meal.add(rice, meat, bean);

    return this;
  }

  getMeal (): ComposedMeal {
    return this._meal;
  }

  reset () {
    this._meal = new ComposedMeal();
    return this;
  }

  getPrice () {
    return this._meal.getPrice();
  }
}
