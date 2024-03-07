import {Component, ElementRef, ViewChild} from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage {

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  xn: number = 0;
  xk: number = 0;
  h: number = 0;
  a: number = 0;
  xx: string[] = [];
  yy: number[] = [];
  data1: string[] = [];

  constructor() {
    Chart.register(...registerables);
  }

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Графік функції',
            fill: false,
            tension: 0.4,
            borderColor: '#428cff',
            borderDashOffset: 0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          }
        ]
      }
    })
  }

  graphras(xn: any, xk: any, a: any, h: any) {
    this.data1 = [];
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x: number = 0;
    let y: number = 0;
    let i: number = 0;
    x = this.xn;
    this.xx = [];
    this.yy = [];
    while (x < this.xk) {
      if (x <= 0){
        y = Math.tan((x + 3) ** 2) / (((Math.abs(x)) ** 1.2) * Math.sin(3 * x))
      }
      else if (x <= this.a) {
        y = (x ** 3 - 4 * x + 2) / (x ** 2 + Math.sin(7 * x) - 1)
      }
      else {
        y = (Math.tan(0.1 * Math.PI * (x ** 2)) + x) / (Math.cos(2 * x + 3) ** 2)
      }
      this.xx.push(x.toFixed(1));
      this.yy.push(parseFloat(y.toFixed(1)));
      let s = 'x= ' + x.toFixed(1) + " y= " + y.toFixed(1);
      this.data1.push(s);
      x = x + this.h;
    }
    this.lineChartMethod();
  }


}
