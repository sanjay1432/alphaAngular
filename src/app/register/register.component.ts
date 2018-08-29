import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormControl, AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerationForm: FormGroup;
  constructor(public router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.createForm();
   }

  ngOnInit() {
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmpassword');
   }
  createForm() {
    this.registerationForm = this.fb.group({
      username: [null, Validators.required ],
      password: [null, Validators.required ],
      confirmpassword: [null, [Validators.required, this.passwordConfirming]]
    });
  }

  passwordConfirming(confirmedPassword: AbstractControl): any {
      if (!confirmedPassword.parent || !confirmedPassword) {
        return;
      }
      const pwd = confirmedPassword.parent.get('password');
      const confirmPassword = confirmedPassword.parent.get('confirmpassword');

      if (!pwd || !confirmPassword) {
        return ;
      }
      if (pwd.value !== confirmPassword.value) {
          return { invalid: true };

  }
}

  onRegister() {
    console.log(this.registerationForm.value);
    this.authService.saveUser(this.registerationForm.value);
    this.router.navigate(['/login']);
  }
}
