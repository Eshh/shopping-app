import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredients.model';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() currentRecipe: Recipe;

  constructor(private shoppingService:ShoppingService) {}

  ngOnInit(): void {}

  sendToShoppingList(ingredients:Ingredient[]){
    this.shoppingService.getIngredientsList.emit(ingredients)
  }
}
