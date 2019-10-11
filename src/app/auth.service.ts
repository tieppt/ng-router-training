import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthorized = false;
  constructor() { }
  login() {
    this.isAuthorized = true;
  }

  logout() {
    this.isAuthorized = false;
  }
}
