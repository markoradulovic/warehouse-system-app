import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, NgFor, NgIf],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  @Input() public products: Product[] = [];

  @Output() onDeleteEvent = new EventEmitter<number>();

  public productTrackBy(index: number, item: Product): number {
    return item.id;
  }

  public onDelete($event: number): void {
    this.onDeleteEvent.emit($event);
  }
}
