import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly productsUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get<Product[]>(this.productsUrl);
  }

  public getProduct(productId: number) {
    return this.http.get<Product>(`${this.productsUrl}/${productId}`);
  }

  public createProduct(product: Product) {
    return this.http.post(`${this.productsUrl}`, product);
  }

  public deleteProduct(productId: number) {
    return this.http.delete(`${this.productsUrl}/${productId}`);
  }

  public updateProduct(product: Product) {
    return this.http.put(`${this.productsUrl}/${product.id}`, product);
  }
}
