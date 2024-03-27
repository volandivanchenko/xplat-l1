import {Dwelling} from "./dwelling";

export class Village extends Dwelling {

  house_num!: number;
  pph!: number; //people per house

  constructor(override name: string, override area: number, house_num: number, pph: number) {
    if (house_num == undefined || house_num <= 0) throw new Error('house_num <= 0')
    if (pph == undefined || pph <= 0) throw new Error('pph <= 0')
    super(name, area, house_num * pph);
    this.house_num = house_num;
    this.pph = pph;
    this.population = this.house_num * this.pph;
    if (this.population > 1000) throw new Error('population > 1000')
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
