import {Component} from '@angular/core';

@Component({
  selector: 'app-tab1', templateUrl: 'tab1.page.html', styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
  }
  error_msg = '';
  result = 0;

  calc(num1: any, num2: any, num3: any) {
    let result: number = 0;
    try {
      let n1 = parseFloat(num1);
      let n2 = parseFloat(num2);
      let n3 = parseFloat(num3);
      if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        throw new Error('Not a number in input');
      }
      if (n1 > 0 || n2 > 0 || n3 > 0) {
        result = (n1 + n2 + n3) ** 2;
      } else {
        result = n1 ** 2 + n2 ** 2 + n3 ** 2;
      }
    } catch (error) {
      console.error(error);
      // @ts-ignore
      document.getElementById("output").innerText = "Ви ввели не число."
    } finally {
      this.result = result;
    }

  }

}
