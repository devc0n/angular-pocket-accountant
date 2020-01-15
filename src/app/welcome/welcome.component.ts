import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
  }

  login() {
    this.auth.login();
  }

}
