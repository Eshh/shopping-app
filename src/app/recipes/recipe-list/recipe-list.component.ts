import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Chicken Biryani', 
    'Biryani is a mixed rice dish',
     'https://i0.wp.com/pixahive.com/wp-content/uploads/2020/10/Chicken-biryani-143360-pixahive.jpg?fit=1560%2C1040&ssl=1'),
    new Recipe('Pizza', 
    'Pizza is a dish of Italian origin',
     'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
