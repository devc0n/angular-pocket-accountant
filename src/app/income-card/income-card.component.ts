import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-income-card',
  templateUrl: './income-card.component.html',
  styleUrls: ['./income-card.component.css']
})
export class IncomeCardComponent implements OnInit {

  year: number;
  totalIncome: number = 0;
  subTotalIncome: number = 0;
  taxes: number = 0;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.year = new Date().getFullYear();

    this.api.listInvoices$().subscribe(
      res => {
        for (const invoice of res) {
          console.log(invoice)
          this.totalIncome += invoice.total;
          this.subTotalIncome += invoice.subtotal;
          this.taxes += invoice.tax;
          console.log(this.totalIncome);
        }
      },
      error => console.warn(error)
    );
  }
}
