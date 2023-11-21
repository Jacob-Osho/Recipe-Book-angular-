import { Ingridient } from '../../shared/Ingridient.model';

export class ShopingListService {
  private ingridients: Ingridient[] = [
    new Ingridient('Banana', 2),
    new Ingridient('Cocaine', 3),
    new Ingridient('Vegitables', 4),
    new Ingridient('Better Cocaine', 5),
    new Ingridient('Beer', 6),
    new Ingridient('And Definitely Cocaine!', 7),
  ];
  addIngridient(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
  }
  getIngridients() {
    return this.ingridients;
  }
  addIngridients(ingridients: Ingridient[]) {
    // for (let ingridient of ingridients) {
    //   this.addIngridient(ingridient);
    // }
    debugger;
    this.ingridients.push(...ingridients);
  }
}
