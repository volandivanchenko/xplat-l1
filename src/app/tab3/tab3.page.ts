import {Component} from '@angular/core';

@Component({
  selector: 'app-tab3', templateUrl: 'tab3.page.html', styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {
  }

  a: number[][] = [];
  n: number = 0;
  prod = 0;

  calc(n: any) {

    this.a = [];

    try {
      this.n = parseInt(n);


      if (isNaN(this.n)) {


        throw new Error('Parameter is not a number!');

      }

      if (n <= 0) {
        throw new Error('Parameter less than zero');

      }

      let i: number, j: number = 0;

      this.a = Array.from(Array(this.n), () => Array(this.n));

      console.log('Array created');

      for (i = 0; i < this.n; i++) {

        //Створюємо рядок матриці

        this.a[i] = Array(this.n);

        //У циклі заповнюємо матрицю

        for (j = 0; j < this.n; j++) {

          //обраховуємо значення

          let aa: number = Math.pow(-1, i) * (i + 2 * j) / 3;

          //округлюємо значення та записуємо його до масиву

          this.a[i][j] = parseFloat(aa.toFixed(2));

        }

      }

      this.prod = 1;
      for (let row: number = 0; row < this.n; row++) {
        for (let col: number = 0; col < this.n; col++) {
          if (this.a[row][col] % 2 === 0 && this.a[row][col] != 0) {
            this.prod *= this.a[row][col];
          }
        }
      }
    } catch (error) {

      console.log(error);

    }

  }

  getBgColor(b: number) {
    return b % 2 == 0 ? '#428cff' : 'transparent';
  }

  getFgColor(b: number) {
    if (b % 2 == 0) {
      return '#fff';
    }
    return;
  }
}
