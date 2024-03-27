import {Component} from '@angular/core';
import {Dwelling} from "../Class/dwelling";
import {City} from "../Class/city";
import {Village} from "../Class/village";
import {Smt} from "../Class/smt";

@Component({
  selector: 'app-abstractclasspage',
  templateUrl: './abstractclasspage.page.html',
  styleUrls: ['./abstractclasspage.page.scss'],
})
export class AbstractclasspagePage {

  dwelling: Dwelling[] = [];

  min!: number;

  constructor() {
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  ras(nn: any) {
    this.dwelling = new Array<Dwelling>();

    let n = parseInt(nn);

    try {
      if (isNaN(n)) {
        throw new Error('Parameter is not a number!');
      }
      for (let i = 0; i < n; i++) {
        this.dwelling.push(new Village("Село " + (i + 1), this.getRandomInt(1, 40), this.getRandomInt(3, 35), this.getRandomInt(1, 10)));
        this.dwelling.push(new Smt("СМТ " + (i + 1), this.getRandomInt(20, 600), this.getRandomInt(1000, 3000000)));
        this.dwelling.push(new City("Місто " + (i + 1), this.getRandomInt(20, 600), this.getRandomInt(1000, 3000000)));
      }
      this.min = -1;
      this.dwelling.forEach(e => {
        if (e.density() < this.min || this.min < 0) {
          console.log(e.name + ': ' + e.density())
          this.min = e.density();
        }

      })
    } catch (Error) {
      console.error(Error);
    }
  }

  getColor(el: number, min: number, color: string) {
    return (Math.abs(el - min) < 0.01) ? color : '';
  }

}
