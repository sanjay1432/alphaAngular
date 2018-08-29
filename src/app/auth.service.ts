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
  tokengenerator() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  onLogin(user) {
    const saveduser = JSON.parse(this.getUser());
    if (saveduser) {
        if (user.username !== saveduser.username && user.password !== saveduser.password) {
          return false;
        } else {
          localStorage.setItem('token', this.tokengenerator());
          return true;
        }
    } else {
          return 'notavailable';
    }
  }
  isAuthenticated() {
    const token = localStorage.getItem('token');
    if (token == null) {
      return false;
    }
    return true;
  }

  public set isLoggedIn(value) {
     this.logged = value;
  }

  public get isLoggedIn() {
     return this.logged;
  }
}
