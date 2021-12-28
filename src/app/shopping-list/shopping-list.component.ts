import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potato', 10),
    new Ingredient('Chicken', 5),
  ];
  constructor() {}

  ngOnInit(): void {}

  receiveIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
