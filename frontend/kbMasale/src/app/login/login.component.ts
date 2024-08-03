import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SignUpServiceService } from '../Service/sign-up-service.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink,JsonPipe],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: SignUpServiceService) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required]),
    pass: new FormControl("", [Validators.required, Validators.minLength(8)]),
  });

  loginInfo: any;
  router = inject(Router);

  OnLogin() {
    if (this.loginForm.valid) {
      this.loginInfo = this.loginForm.value;
      this.service.login(this.loginInfo).subscribe({
        next: response => {
          alert('Login successful!');
          setTimeout(() => this.router.navigateByUrl('add-products'), 1000);
          console.log(response);
        },
        error: error => {
          console.error('Login Error:', error);
          const message = error.status === 400 && error.error.message === 'Invalid email or password'
            ? 'Login failed: Invalid email or password.'
            : 'Login failed. Please try again.';
          alert(message);
        }
      });
    }
  }
}
