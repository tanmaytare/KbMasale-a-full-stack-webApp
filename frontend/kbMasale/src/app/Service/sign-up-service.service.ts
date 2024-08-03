import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  url = "http://localhost:3000/signup";
  loginUrl = "http://localhost:3000/login"; 
  constructor(private http:HttpClient) { }

  onSubmit(data:any):Observable<any>
  {
    return this.http.post<any>(this.url,data);
  }

  login(data:any):Observable<any>
  {
    return this.http.post<any>(this.loginUrl,data);
  }
}
