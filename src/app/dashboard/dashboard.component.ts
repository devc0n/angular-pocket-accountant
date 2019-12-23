import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  data = this.dataService.getData();

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

}
