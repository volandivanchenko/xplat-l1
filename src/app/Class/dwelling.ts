export abstract class Dwelling {
  name!: string;
  area!: number;
  population!: number;

  constructor(name: string, area: number, population: number) {
    if (name == undefined || name == '') throw new Error('Please enter name');
    if (area == undefined || area <= 0) throw new Error('area undefined or <= 0');
    if (population == undefined || population <= 0) throw new Error('population undefined or <= 0');
    this.name = name;
    this.area = area;
    this.population = population;
  }

  abstract density(): any;

  abstract show(): string;
}
