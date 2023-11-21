import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../../shared/Ingridient.model';
import { ShopingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.css',
})
export class ShopingListComponent implements OnInit {
  ingridients: Ingridient[];

  constructor(private shopingListService: ShopingListService) {}
  onIngridientAdded(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
  }
  ngOnInit(): void {
    this.ingridients = this.shopingListService.getIngridients();
  }
}
