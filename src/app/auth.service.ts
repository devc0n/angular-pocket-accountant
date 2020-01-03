import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import * as auth0 from 'auth0-js';

// why do you need defining window as any?
// check this: https://github.com/aws/aws-amplify/issues/678#issuecomment-389106098
(window as any).global = window;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  auth0 = new auth0.WebAuth({
    clientID: 'aaIbGMiRRwMImwiNFk4HrcBYQ2V3ihd5',
    domain: 'dev-nj2ldp21.eu.auth0.com',
    responseType: 'token',
    redirectUri: 'http://localhost:4200/',
    scope: 'openid'
  });

  accessToken: String;
  expiresAt: Number;

  constructor(public router: Router) {
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.accessToken = authResult.accessToken;
        this.expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.router.navigate(['/dashboard']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  public logout(): void {

    this.auth0.logout({clientID: "aaIbGMiRRwMImwiNFk4HrcBYQ2V3ihd5"});
    // Remove tokens and expiry time from localStorage
    this.accessToken = null;
    this.expiresAt = null;
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    return new Date().getTime() < this.expiresAt;
  }

  /**
   * Check if user is logged in.
   * if not, redirect to login page.
   */
  canActivate() {
    if (this.isAuthenticated()) {
      return true;
    }
    this.login();
    return false;
  }

}
