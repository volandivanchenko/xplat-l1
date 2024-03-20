import {Dwelling} from "./dwelling";

export class City extends Dwelling {

  constructor(override name: string, override area: number, override population: number) {
    super();
  }

  density(): any {
    return this.population / this.area;
  }

  show(): string {
    return this.name + '\n'
      + '\t' + "Площа: " + this.area + '\n'
      + '\t' + "Населення: " + this.population + '\n'
      + '\t' + "Щільність: " + this.density() + '\n'
      ;
  }
}
