import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() sendItemToList = new EventEmitter<Ingredient>();
  @ViewChild('name') itemName: ElementRef;
  @ViewChild('amount') amount: ElementRef;

  constructor() {}

  ngOnInit(): void {}
  addItem(event: any) {
    event.preventDefault();
    let ingName = this.itemName.nativeElement.value;
    let ingAmount = this.amount.nativeElement.value;
    let newIngredient = new Ingredient(ingName, ingAmount);
    this.sendItemToList.emit(newIngredient);
  }
}
