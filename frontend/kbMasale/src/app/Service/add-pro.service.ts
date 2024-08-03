import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProService {

  http = inject(HttpClient);
  apiUrl = "http://localhost:3000";
  private baseUrl = 'http://localhost:3000/products';

  OnSubmit(product: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/products`, product);
  }

  GetProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  DeleteProduct(productId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/products/${productId}`);
  }

  updateProduct(id: string, productData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, productData);
  }
}
