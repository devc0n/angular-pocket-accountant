import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import 'rxjs/Rx';
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-page-overview',
  templateUrl: './page-overview.component.html',
  styleUrls: ['./page-overview.component.css']
})
export class PageOverviewComponent implements OnInit {

  constructor(private api: ApiService) {
  }

  from: string;
  until: string;

  ngOnInit() {
    this.from = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.until = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }


  getOverview() {
    this.api.downloadOverview$(this.from, this.until).subscribe(
      data => this.downloadFile(data)),
      error => console.error('Error downloading the file.'),
      () => console.info('OK');
  }


  downloadFile(data: Response) {
    // @ts-ignore
    const blob = new Blob([data], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

}
