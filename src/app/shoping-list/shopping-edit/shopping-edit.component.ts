import { Component, ElementRef, ViewChild } from '@angular/core';

import { Ingridient } from '../../../shared/Ingridient.model';
import { ShopingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shopingListServise: ShopingListService) {}
  onItemAdd() {
    const newIngridient = new Ingridient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );

    this.shopingListServise.addIngridient(newIngridient);
  }
}
