import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly productsUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  public getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${productId}`);
  }

  public createProduct(product: Product): Observable<any> {
    product.id = Math.floor(Math.random() * 100);

    return this.http.post(`${this.productsUrl}`, product);
  }

  public updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.productsUrl}/${product.id}`, product);
  }

  public deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.productsUrl}/${productId}`);
  }
}
