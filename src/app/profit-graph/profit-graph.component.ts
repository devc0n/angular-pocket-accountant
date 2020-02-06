import {Component, OnInit} from '@angular/core';
import * as CanvasJS from 'src/assets/canvasjs.min.js';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-profit-graph',
  templateUrl: './profit-graph.component.html',
  styleUrls: ['./profit-graph.component.css']
})
export class ProfitGraphComponent implements OnInit {

  constructor(private api: ApiService) {

  }


  ngOnInit() {

    let dataPoints = [];

    this.api.listInvoices$().subscribe(
      res => {

        res.sort((val1, val2) => {
          return new Date(val1.date) > new Date(val2.date) ? 1 : -1
        });

        for (const invoice of res) {
          console.log(new Date(invoice.date));
          dataPoints.push({x: new Date(invoice.date), y: invoice.total})
        }
        const chart = new CanvasJS.Chart('chartContainer', {
          animationEnabled: true,
          theme: 'light2',
          title: {
            text: 'Income, Expenses and Profit of ' + new Date().getFullYear()
          },
          axisX: {
            valueFormatString: 'DD MMM',
            crosshair: {
              enabled: true,
              snapToDataPoint: true
            }
          },
          axisY: {
            title: 'EURO',
            includeZero: false,
            valueFormatString: '€##0.00',
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
              labelFormatter(e) {
                return '€' + CanvasJS.formatNumber(e.value, '##0.00');
              }
            }
          },
          data: [{
            type: 'area',
            xValueFormatString: 'DD MMM',
            yValueFormatString: '€##0.00',
            dataPoints
          }]
        });
        chart.render();
      },
      error => console.warn(error)
    );
  }

}
