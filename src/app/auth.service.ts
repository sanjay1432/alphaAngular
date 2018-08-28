import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  logged = false;

  constructor() { }

  saveUser(data) {
    const receiveddata = JSON.stringify(data);
    localStorage.setItem('user', receiveddata);
  }

  getUser() {
    return  localStorage.getItem('user');
  }

  public set isLoggedIn(value) {
     this.logged = value;
  }

  public get isLoggedIn() {
     return this.logged;
  }
}
