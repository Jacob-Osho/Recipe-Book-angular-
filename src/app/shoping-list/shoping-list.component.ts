import { Component } from '@angular/core';
import { Ingridient } from '../../shared/Ingridient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.css',
})
export class ShopingListComponent {
  ingridients: Ingridient[] = [
    new Ingridient('Banana', 2),
    new Ingridient('Cocaine', 3),
    new Ingridient('Vegitables', 4),
    new Ingridient('Better Cocaine', 5),
    new Ingridient('Beer', 6),
    new Ingridient('And Definitely Cocaine!', 7),
  ];
  onIngridientAdded(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
  }
}
