import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, Subject, tap } from 'rxjs';
import { combineLatestWith, map } from 'rxjs/operators';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly productsUrl = 'http://localhost:8080/api/products';

  public products$ = this.http.get<Product[]>(this.productsUrl).pipe(
    tap((data: Product[]) => console.log('Products: ', JSON.stringify(data))),
    catchError(() => of([]))
  );

  private productSelectedSubject = new BehaviorSubject<number>(0);
  public productSelectedAction$ = this.productSelectedSubject.asObservable();

  public selectedProduct$ = this.products$.pipe(
    combineLatestWith(this.productSelectedAction$),
    map(([products, selectedProductId]) =>
      products.find((product: Product) => product.id === selectedProductId)
    ),
    tap((product) => console.log('selectedProduct', product))
  );

  private productInsertedSubject = new Subject<Product>();
  public productInsertedAction$ = this.productInsertedSubject.asObservable();

  productsWithAdd$ = this.products$.pipe(
    combineLatestWith(this.productInsertedAction$),
    map(([products, newProduct]) => (products = [...products, newProduct]))
  );

  constructor(private http: HttpClient) {}

  public selectedProductChanged(selectedProductId: number): void {
    this.productSelectedSubject.next(selectedProductId);
  }

  public addProduct(newProduct: Product) {
    this.productInsertedSubject.next(newProduct);
  }
}
