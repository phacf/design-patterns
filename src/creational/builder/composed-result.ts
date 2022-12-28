import { ComposedMeal } from './classes/composed-meal';
import { Meat, Rice, Bean, Beverage, Dessert } from './classes/meal';

const rice = new Rice('arroz', 5);
const meat = new Meat('carne', 50);
const bean = new Bean('feijao', 4);
const beverage = new Beverage('cerveja', 6);
const dessert = new Dessert('sorvete', 10);

const mealBox = new ComposedMeal();

mealBox.add(rice, meat, bean, beverage, dessert);

