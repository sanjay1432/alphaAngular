import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  isLogged = false;

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.isLogged = this.authService.isLoggedIn;
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.authService.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  home() {
    this.router.navigate(['/']);
  }

}
