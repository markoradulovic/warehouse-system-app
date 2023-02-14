import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../shared/data-access/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  selectedProduct$ = this.productService.selectedProduct$;

  constructor(private productService: ProductService) {}
}
