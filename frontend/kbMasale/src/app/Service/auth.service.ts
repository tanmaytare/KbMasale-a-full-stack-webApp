import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());

  loginStatus$ = this.loginStatus.asObservable();

  private checkLoginStatus(): boolean {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('User') !== null;
    }
    return false;
  }

  setLoginStatus(isLoggedIn: boolean) {
    if (typeof localStorage !== 'undefined') {
      this.loginStatus.next(isLoggedIn);
    }
  }
}
