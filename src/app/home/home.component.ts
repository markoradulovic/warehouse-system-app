import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../shared/data-access/product.service';
import { ProductListComponent } from './ui/product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent, NgIf, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public products$ = this.productService.products$;

  constructor(private productService: ProductService) {}
}
