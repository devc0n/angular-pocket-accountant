import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {MatDialog} from '@angular/material/dialog';
import {ApiService} from '../api.service';
import {PostDialogComponent} from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['id', 'first_name', 'last_name'];
  data: [];


  constructor(private api: ApiService, public auth: AuthService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.api.ping$().subscribe(
      res => this.data = res
    );
  }

  // deletePost(id) {
  //   if (this.auth.isAuthenticated$) {
  //     this.dataService.deletePost(id);
  //     this.data = this.dataService.getData();
  //   } else {
  //     alert('Login in Before');
  //   }
  // }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      // this.dataService.addPost(result.data);
      // this.data = this.dataService.getData();
    });
  }

}
