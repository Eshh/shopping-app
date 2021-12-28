import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') itemName: ElementRef;
  @ViewChild('amount') amount: ElementRef;

  constructor(private shoppingService : ShoppingService) {}

  ngOnInit(): void {}
  addItem(event: any) {
    event.preventDefault();
    let ingName = this.itemName.nativeElement.value;
    let ingAmount = this.amount.nativeElement.value;
    let newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingService.addIngredients(newIngredient);
  }
}
