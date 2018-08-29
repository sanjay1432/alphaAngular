import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormControl, AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;
  constructor(public router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required ],
      password: [null, Validators.required ]
    });
  }

  onLogin() {
    const isLoggedin = this.authService.onLogin(this.loginForm.value);
    if (isLoggedin === 'notavailable') {
      this.error = 'You are not registered!';
    } else {
      if (isLoggedin) {
        this.router.navigate(['/main']);
      } else {
        this.error = 'Please check your credentials!';
      }
    }
  }
}
