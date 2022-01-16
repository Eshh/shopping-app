import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/models/ingredients.model';

@Injectable()
export class ShoppingService {
   getIngredientsList = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potato', 10),
    new Ingredient('Chicken', 5),
  ];

  getIngredientsData() {
    return this.ingredients;
  }

  addIngredients(ing: Ingredient) {
    this.ingredients.push(ing);
  }
}
