import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/models/ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers:[ShoppingService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  sub: Subscription;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredientsData();
    this.sub = this.shoppingService.getIngredientsList.subscribe(
      (ings: Ingredient[]) => {
        ings.map((each) => {
          this.ingredients.push(each);
        });
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
