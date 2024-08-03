import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsServiceService {
url = "http://localhost:3000/data"
  constructor(private http:HttpClient) { }

  onSend(data:any):Observable<any>
  {
    return this.http.post<any>(this.url,data);
  }
  
}
