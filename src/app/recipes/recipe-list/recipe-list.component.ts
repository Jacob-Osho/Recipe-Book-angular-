import { Component } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recepie[] = [
    new Recepie(
      'A Test',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
    new Recepie(
      'A Test',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
    new Recepie(
      'A Test',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
    new Recepie(
      'A Test',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
    new Recepie(
      'A Test',
      'this is a test',
      'https://res.cloudinary.com/oilsbeatstore/image/upload/v1675114887/Cancelled%20Visa/Cancelled%20Visa_Img.jpg'
    ),
  ];
}
