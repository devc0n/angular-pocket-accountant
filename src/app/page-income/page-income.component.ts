import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {AuthService} from "../auth.service";
import {MatDialog} from "@angular/material/dialog";
import {ServiceDialogComponent} from "../service-dialog/service-dialog.component";
import {InvoiceDialogComponent} from "../invoice-dialog/invoice-dialog.component";

@Component({
  selector: 'app-page-income',
  templateUrl: './page-income.component.html',
  styleUrls: ['./page-income.component.css']
})
export class PageIncomeComponent implements OnInit {

  displayedColumns = ['date', 'total', 'description', 'number'];
  data: [];

  constructor(private api: ApiService, public auth: AuthService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.updateInvoicesList();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      width: '99%',
      data: 'Add invoice'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.api.addInvoice$(result.data).subscribe(
        it => this.updateInvoicesList(),
        error => alert('Whoops, something went wrong!'));
    });
  }

  updateInvoicesList() {
    this.api.listInvoices$().subscribe(
      res => this.data = res,
      error => console.warn(error)
    );
  }

}
