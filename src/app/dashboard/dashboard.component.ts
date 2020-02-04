import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {MatDialog} from '@angular/material/dialog';
import {ApiService} from '../api.service';
import {ServiceDialogComponent} from "../service-dialog/service-dialog.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['description', 'total', 'tax', 'subtotal', 'time'];
  data: [];


  constructor(private api: ApiService, public auth: AuthService, public dialog: MatDialog) {
  }

  ngOnInit() {
    // this.updateServicesList();
  }

  // deletePost(id) {
  //   if (this.auth.isAuthenticated$) {
  //     this.dataService.deletePost(id);
  //     this.data = this.dataService.getData();
  //   } else {
  //     alert('Login in Before');
  //   }
  // }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(ServiceDialogComponent, {
  //     width: '600px',
  //     data: 'Add Service'
  //   });
  //   dialogRef.componentInstance.event.subscribe((result) => {
  //     this.api.addService$(result.data).subscribe(
  //       it => this.updateServicesList(),
  //       error => alert('Whoops, something went wrong!'));
  //   });
  // }
  //
  // updateServicesList() {
  //   this.api.getServices$().subscribe(
  //     res => this.data = res,
  //     error => console.warn(error)
  //   );
  // }

}
