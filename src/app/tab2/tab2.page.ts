import {Component} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {
  }

  result: number = 0;

  finder(num1: any, num2: any) {
    let result = 0;
    try {
      console.log('started');
      let n1 = parseInt(num1);
      let n2 = parseInt(num2);
      if (isNaN(n1) || isNaN(n2)) {
        throw new Error('Введено не число');
      }
      if (n2 < n1) {
        throw new Error('b повинне бути більше a.');
      }
      let firstDivisible = 0;
      let stop = n2 - n1 > 29 ? n1 + 29 : n2;
      for (let i = n1; i <= stop; i++) {
        if (i % 29 == 0) {
          firstDivisible = i;
          if (i % 5 == 2 && i % 2 == 0) {
            result++;
            console.log(i);
          }
          break;
        }
      }
      console.log('fD:' + firstDivisible);
      console.log('stop: ' + stop);
      if (stop == n2) {
        this.result = result;
        return;
      }
      for (let i = firstDivisible; i <= n2; i += 29) {
        if (i % 5 == 2 && i % 2 == 0) {
          result++;
          console.log(i);
        }
      }
    } catch (error) {
      console.error(error);
      // @ts-ignore
      document.getElementById("output").innerText = error.toString();
      return;
    }

    this.result = result;
    // @ts-ignore
    document.getElementById('output').innerText = this.result;
  }
}
