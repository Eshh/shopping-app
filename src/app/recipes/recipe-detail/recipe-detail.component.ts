import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/models/ingredients.model';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeID: number = 0;
  currentRecipe: Recipe;

  constructor(
    private shoppingService: ShoppingService,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipeID = +params['id'];
      this.currentRecipe = this.recipeService.getRecipeById(this.recipeID);
    });
  }

  sendToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.getIngredientsList.next(ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }
}
