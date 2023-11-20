import { Ingridient } from '../../shared/Ingridient.model';

export class ShopingListService {
  ingridients: Ingridient[] = [
    new Ingridient('Banana', 2),
    new Ingridient('Cocaine', 3),
    new Ingridient('Vegitables', 4),
    new Ingridient('Better Cocaine', 5),
    new Ingridient('Beer', 6),
    new Ingridient('And Definitely Cocaine!', 7),
  ];
  getIngridients() {
    return this.ingridients;
  }
}
