import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import 'rxjs/Rx' ;

@Component({
  selector: 'app-page-overview',
  templateUrl: './page-overview.component.html',
  styleUrls: ['./page-overview.component.css']
})
export class PageOverviewComponent implements OnInit {

  constructor(private api: ApiService) {
  }

  ngOnInit() {
  }

  getOverview() {
    this.api.downloadOverview$().subscribe(
      data => this.downloadFile(data)),//console.log(data),
      error => console.log('Error downloading the file.'),
      () => console.info('OK');
  }


  downloadFile(data: Response) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }

}
