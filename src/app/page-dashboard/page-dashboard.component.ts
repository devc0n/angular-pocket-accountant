import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

export interface Tile {
  id: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
  value?: number;
}

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.css']
})
export class PageDashboardComponent implements OnInit {

  private totalIncome: number;
  private totalExpenses: number;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.updateDashboard();
  }

  tiles: Tile[] = [
    {id:'tile-income', text: 'Income', value: this.totalIncome, cols: 2, rows: 1, color: 'lightgreen'},
    {id:'tile-expenses', text: 'expenses', value: this.totalExpenses, cols: 2, rows: 1, color: 'lightpink'}
  ];

  updateIncome(res) {
    this.totalIncome = res.length;
    this.tiles[0] = {id:'tile-income', text: 'Income', value: res.length, cols: 2, rows: 1, color: 'lightgreen'};
  }

  updateExpenses(res) {
    this.totalExpenses = res.length;
    this.tiles[1] = {id:'tile-expenses', text: 'expenses', value: res.length, cols: 2, rows: 1, color: 'lightpink'};
  }

  updateProfit() {
    let profit = this.totalIncome - this.totalExpenses;
  }

  updateDashboard() {
    this.api.listInvoices$().subscribe(
      res => this.updateIncome(res),
      error => console.warn(error)
    );
    this.api.listInvoices$().subscribe(
      res => this.updateExpenses([]),
      error => console.warn(error)
    );
  }


}
