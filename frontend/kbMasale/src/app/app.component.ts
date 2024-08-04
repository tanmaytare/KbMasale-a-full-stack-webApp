import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { AboutComponent } from "./about/about.component";
import { CommonModule } from '@angular/common';
import { AuthService } from './Service/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, RouterLink, AboutComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kbMasale';
  islogin = false;
  router = inject(Router);
  authService = inject(AuthService);

  logOut() {
    localStorage.removeItem("User");
    this.authService.setLoginStatus(false);
    this.router.navigateByUrl("/");
  }

  ngOnInit(): void {
    this.authService.loginStatus$.subscribe(isLoggedIn => {
      this.islogin = isLoggedIn;
    });
  }
}
