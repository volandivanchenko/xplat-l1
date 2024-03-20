import {Dwelling} from "./dwelling";

export class Village extends Dwelling {

  house_num!: number;
  pph!: number; //people per house

  constructor(override name: string, override area: number, house_num: number, pph: number) {
    super();
    this.house_num = house_num;
    this.pph = pph;
    this.population = this.house_num * this.pph;
  }

  density(): any {
    return this.population / this.area;
  }

  show(): string {
    return this.name + '\n'
      + '\t' + "Площа: " + this.area + '\n'
      + '\t' + "Будинків: " + this.house_num + '\n'
      + '\t' + "Ос./Буд.: " + this.pph + '\n'
      + '\t' + "Населення: " + this.population + '\n'
      + '\t' + "Щільність: " + this.density() + '\n'
      ;
  }
}
