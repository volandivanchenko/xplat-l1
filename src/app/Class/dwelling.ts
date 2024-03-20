export abstract class Dwelling {
  name!: string;
  area!: number;
  population!: number;

  constructor() {
  }

  abstract density(): any;

  abstract show(): string;
}
