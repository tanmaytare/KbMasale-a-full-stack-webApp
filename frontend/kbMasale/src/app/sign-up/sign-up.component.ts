import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUpServiceService } from '../Service/sign-up-service.service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../Service/auth.service';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private service: SignUpServiceService, private authService: AuthService) {}
  router = inject(Router);

  signupform: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    ph: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    id: new FormControl("", [Validators.required, Validators.minLength(5)]),
    pass: new FormControl("", [Validators.required, Validators.minLength(8)]),
  });

  signupInfo: any;

  onSubmit() {
    if (this.signupform.valid) {
      this.signupInfo = this.signupform.value;
      this.service.onSubmit(this.signupInfo).subscribe({
        next: response => {
          alert('Signup successful!');
          localStorage.setItem('User', JSON.stringify(response));
          this.authService.setLoginStatus(true);
          setTimeout(() => this.router.navigateByUrl('products'), 1000);
        },
        error: error => {
          const message = error.status === 400 && error.error.message === 'User already exists'
            ? 'Signup failed: User already exists.'
            : 'Signup failed. Please try again.';
          alert(message);
          console.error('Signup error:', error);
        }
      });
    }
  }
}
