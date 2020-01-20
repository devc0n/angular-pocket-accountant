import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../api.service";
import {ServiceRequestDTO} from "../Domain/Service";
import {InvoiceRequestDTO} from "../Domain/Invoice";

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent {

  newInvoice: InvoiceRequestDTO = {
    description: undefined,
    total: undefined,
    taxPercentage: undefined,
    time: undefined,
    date: undefined
  };

  constructor(
    public dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {
  }

  public event: EventEmitter<any> = new EventEmitter();

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.event.emit({data: this.newInvoice});
    this.dialogRef.close();
  }

}
