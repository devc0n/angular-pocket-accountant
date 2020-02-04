import {Component, EventEmitter, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../api.service";
import {ExpenseRequestDTO} from "../Domain/Expense";

@Component({
  selector: 'app-expense-dialog',
  templateUrl: './expense-dialog.component.html',
  styleUrls: ['./expense-dialog.component.css']
})
export class ExpenseDialogComponent {

  newExpense: ExpenseRequestDTO = {
    description: undefined,
    price: undefined,
    tax: undefined,
    date: undefined
  };

  constructor(
    public dialogRef: MatDialogRef<ExpenseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {
  }

  public event: EventEmitter<any> = new EventEmitter();

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.event.emit({data: this.newExpense});
    this.dialogRef.close();
  }

}
