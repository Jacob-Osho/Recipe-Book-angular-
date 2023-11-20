import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test1',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
    new Recipe(
      'A Test2',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
    new Recipe(
      'A Test3',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
    new Recipe(
      'A Test4',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
    new Recipe(
      'A Test5',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();
  getRecipes() {
    return this.recipes.slice();
  }
}
