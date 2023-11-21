import { ThisReceiver } from '@angular/compiler';
import { Ingridient } from '../../shared/Ingridient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingridients: Ingridient[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingridients: Ingridient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingridients = ingridients;
  }
}
