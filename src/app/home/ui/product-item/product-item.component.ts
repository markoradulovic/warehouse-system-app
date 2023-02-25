import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
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
  @Input() public product: Product;

  @Output() onDeleteEvent = new EventEmitter<number>();

  public onDelete(id: number): void {
    this.onDeleteEvent.emit(id);
  }
}
