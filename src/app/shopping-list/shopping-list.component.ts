import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers:[ShoppingService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredientsData();
    this.shoppingService.getIngredientsList.subscribe(
      (ings: Ingredient[]) => {
        console.log('came ings',ings)
        ings.map(each => {
          this.ingredients.push(each)
        })
      }
    );
  }
}
