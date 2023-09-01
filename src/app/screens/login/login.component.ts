import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup
  submitted: boolean | undefined
  constructor( private fb: FormBuilder,private _AuthService: AuthService){
    this.loginForm = this.fb.group({
      ['email']: ['', [Validators.required, Validators.email]],
      ['password']: ['', Validators.required],
    });
  }

  Login() {
    if (this.loginForm.valid) {
      let userData={
        email:this.loginForm.get('email')?.value,
        password:this.loginForm.get('password')?.value
      }
      this._AuthService.login(userData)


    }
  }
}
