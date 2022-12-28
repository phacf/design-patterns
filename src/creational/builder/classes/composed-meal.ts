import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';
export class ComposedMeal implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice (): number {
    return this._children.reduce((acc, meal) => {
      acc += meal.getPrice();
      return acc;
    }, 0);
  }

  add (...meal: MealCompositeProtocol[]) {
    meal.forEach(item => {
      this._children.push(item);
    });
  }
}
