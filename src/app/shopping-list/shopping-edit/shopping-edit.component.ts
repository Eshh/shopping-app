import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('editForm',{static:false}) editForm: NgForm;
  subscription: Subscription;

  editMode: boolean = false;
  editIndex: number = -1;
  editItem:Ingredient;
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editIndex = index;
        this.editItem = this.slService.getIngredient(index)
        this.editForm.setValue({
          'name':this.editItem.name,
          'amount':this.editItem.amount
        })
      }
    );
  }

  onSubmit(form: NgForm) {
    let value = form.value;

    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode === false){
      this.slService.addIngredient(newIngredient);
    }
    else{
      this.slService.updateIngredient(this.editIndex,newIngredient)
    }
    this.editMode = false;
    this.editForm.reset();
  }

  resetForm(){
    this.editForm.reset();
    this.editMode = false;
  }

  deleteIngredient(){
    this.resetForm();
    this.slService.deleteIngredient(this.editIndex)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
