import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Chicken Biryani',
  //     'Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made by adding rice and spices to meat',
  //     'https://i0.wp.com/pixahive.com/wp-content/uploads/2020/10/Chicken-biryani-143360-pixahive.jpg?fit=1560%2C1040&ssl=1',
  //     [new Ingredient('Meat', 1), new Ingredient('Spices', 20)]
  //   ),
  //   new Recipe(
  //     'Pasta',
  //     'Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking',
  //     'https://i1.wp.com/pixahive.com/wp-content/uploads/2020/10/Pasta-time-136190-pixahive.jpg?fit=1560%2C2080&ssl=1',
  //     [new Ingredient('Wheat Flour', 2), new Ingredient('Meat', 1)]
  //   ),
  //   new Recipe(
  //     'Pizza',
  //     'Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven',
  //     'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
  //     [new Ingredient('Wheat Flour', 2), new Ingredient('Meat', 1)]
  //   ),
  //   new Recipe(
  //     'Indian curry',
  //     'A curry is a dish with a sauce seasoned with spices, mainly associated with South Asian cuisine. In southern India, leaves from the curry tree may be included. There are many varieties of curry',
  //     'https://www.maxpixel.net/static/photo/2x/Indian-Food-Cooking-Spice-Meal-Indian-Kitchen-3856044.jpg',
  //     [new Ingredient('Wheat Flour', 2), new Ingredient('Meat', 1)]
  //   ),
  // ];

  private recipes: Recipe[] = [];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updaterRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
