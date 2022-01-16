import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/models/ingredients.model';
import { Recipe } from '../shared/models/recipe.model';

@Injectable()
export class RecipeService {
  selectedRecipe = new Subject<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Chicken Biryani',
      'Biryani is a mixed rice dish',
      'https://i0.wp.com/pixahive.com/wp-content/uploads/2020/10/Chicken-biryani-143360-pixahive.jpg?fit=1560%2C1040&ssl=1',
      [
        new Ingredient('Rice', 5),
        new Ingredient('Chicken', 10),
        new Ingredient('Masala', 10),
        new Ingredient('Veggies', 5),
      ]
    ),
    new Recipe(
      'Pizza',
      'Pizza is a dish of Italian origin',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Cheese', 4),
        new Ingredient('Veggies', 5),
        new Ingredient('Chicken', 5),
      ]
    ),
  ];

  getRecipeData() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }
}
