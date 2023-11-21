import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingridient } from '../../shared/Ingridient.model';
import { ShopingListService } from '../shoping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  constructor(private shopingListService: ShopingListService) {}
  private recipes: Recipe[] = [
    new Recipe(
      'A Test1',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg',
      [
        new Ingridient('Golova1', 1),
        new Ingridient('Golova2', 2),
        new Ingridient('Golova2', 2),
      ]
    ),
    new Recipe(
      'A Test2',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg',
      [new Ingridient('Golova2', 2)]
    ),
    new Recipe(
      'A Test3',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg',
      [new Ingridient('Golova3', 3)]
    ),
    new Recipe(
      'A Test4',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg',
      [new Ingridient('Golova4', 4)]
    ),
    new Recipe(
      'A Test5',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg',
      [new Ingridient('Golova5', 5)]
    ),
  ];
  addToShopingList(ingridients: Ingridient[]) {
    debugger;
    this.shopingListService.addIngridients(ingridients);
  }
  recipeSelected = new EventEmitter<Recipe>();
  getRecipes() {
    return this.recipes.slice();
  }
}
