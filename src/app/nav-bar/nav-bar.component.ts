import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private auth: AuthService) {

  }


  ngOnInit() {

  }

}
