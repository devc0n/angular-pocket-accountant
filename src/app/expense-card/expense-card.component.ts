import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-expense-card',
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.css']
})
export class ExpenseCardComponent implements OnInit {

  year: number;
  totalExpenses: number = 0;
  subTotalExpenses: number = 0;
  taxes: number = 0;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.year = new Date().getFullYear();

    this.api.listExpenses$().subscribe(
      res => {
        for (const expense of res) {
          this.totalExpenses += expense.price;
          this.subTotalExpenses += (expense.price - expense.tax);
          this.taxes += expense.tax;
        }
      },
      error => console.warn(error)
    );
  }
}
