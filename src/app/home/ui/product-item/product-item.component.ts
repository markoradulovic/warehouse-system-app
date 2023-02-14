import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from 'src/app/shared/data-access/product.service';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  @Input()
  public product!: Product;

  constructor(private productService: ProductService) {}

  public onSelected(productId: number): void {
    this.productService.selectedProductChanged(productId);
  }
}
