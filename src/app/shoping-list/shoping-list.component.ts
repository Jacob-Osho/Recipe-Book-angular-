import { Component } from '@angular/core';
import { Ingridient } from '../../shared/Ingridients.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.css',
})
export class ShopingListComponent {
  ingridients: Ingridient[] = [
    new Ingridient('A Test', 2),
    new Ingridient('A Test', 3),
    new Ingridient('A Test', 4),
    new Ingridient('A Test', 5),
    new Ingridient('A Test', 6),
  ];
}
