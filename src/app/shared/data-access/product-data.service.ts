import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const products: Product[] = [
      { id: 1, code: 'MYTZ 123456', quantity: 100, floor: 1, section: 1 },
      { id: 2, code: 'UK 13462', quantity: 12, floor: 1, section: 2 },
      { id: 3, code: 'KOB 8472', quantity: 1, floor: 1, section: 3 },
    ];

    return { products };
  }
}
