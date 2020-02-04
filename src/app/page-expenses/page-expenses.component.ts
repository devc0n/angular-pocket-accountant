import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {AuthService} from "../auth.service";
import {MatDialog} from "@angular/material/dialog";
import {ExpenseDialogComponent} from "../expense-dialog/expense-dialog.component";

@Component({
  selector: 'app-page-expenses',
  templateUrl: './page-expenses.component.html',
  styleUrls: ['./page-expenses.component.css']
})
export class PageExpensesComponent implements OnInit {

  displayedColumns = ['date', 'price', 'tax', 'description'];
  data: [];

  constructor(private api: ApiService, public auth: AuthService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.updateExpensesList();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ExpenseDialogComponent, {
      width: '99%',
      data: 'Add expense'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.api.addExpense$(result.data).subscribe(
        it => this.updateExpensesList(),
        error => alert('Whoops, something went wrong!'));
    });
  }

  updateExpensesList() {
    this.api.listExpenses$().subscribe(
      res => {
        this.data = res;
        console.log(res)
      },
      error => console.warn(error)
    );
  }

}
