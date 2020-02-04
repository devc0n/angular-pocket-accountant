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
    {id:'tile-profit', text: 'profit', value: (this.totalIncome - this.totalExpenses), cols: 1, rows: 2, color: 'lightblue'},
    {id:'tile-expenses', text: 'expenses', value: this.totalExpenses, cols: 2, rows: 1, color: 'lightpink'},
    {id:'tile-graph', text: 'Graph', cols: 3, rows: 2, color: '#DDBDF1'},
  ];

  updateIncome(res) {
    this.totalIncome = res.length;
    this.tiles[0] = {id:'tile-income', text: 'Income', value: res.length, cols: 2, rows: 1, color: 'lightgreen'};
    this.updateProfit()
  }

  updateExpenses(res) {
    this.totalExpenses = res.length;
    this.tiles[2] = {id:'tile-expenses', text: 'expenses', value: res.length, cols: 2, rows: 1, color: 'lightpink'};
    this.updateProfit()
  }

  updateProfit() {
    let profit = this.totalIncome - this.totalExpenses;
    this.tiles[1] = {id:'tile-profit', text: 'profit', value: profit, cols: 1, rows: 2, color: 'lightblue'};
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
