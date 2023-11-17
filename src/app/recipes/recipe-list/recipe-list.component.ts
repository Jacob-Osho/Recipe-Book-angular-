import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
    new Recipe(
      'A Test',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
    new Recipe(
      'A Test',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
    new Recipe(
      'A Test',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
    new Recipe(
      'A Test',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
  ];

  OnRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
