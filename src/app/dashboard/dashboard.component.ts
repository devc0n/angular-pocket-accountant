import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {AuthService} from "../auth.service";
import {PostDialogComponent} from "../post-dialog/post-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  data = this.dataService.getData();

  constructor(private dataService: DataService, public auth: AuthService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  deletePost(id) {
    if (this.auth.isAuthenticated()) {
      this.dataService.deletePost(id);
      this.data = this.dataService.getData();
    } else {
      alert('Login in Before');
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
      this.data = this.dataService.getData();
    });
  }

}
