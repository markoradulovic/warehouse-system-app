import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ProductService } from 'src/app/product/data-access/product.service';
import { Product } from 'src/app/shared/interfaces/product';

export class ProductsValidator {
  public static uniqueCodeValidator(
    productService: ProductService
  ): AsyncValidatorFn {
    return (
      control: AbstractControl
    ): Observable<{ [key: string]: boolean } | null> => {
      return productService
        .getProducts()
        .pipe(
          map((products: Product[]) =>
            products.some((product: Product) => product.code === control.value)
              ? { codeExists: true }
              : null
          )
        );
    };
  }

  public static emptyLocationValidator(
    productService: ProductService
  ): AsyncValidatorFn {
    return (
      group: AbstractControl
    ): Observable<{ [key: string]: boolean } | null> => {
      return productService
        .getProducts()
        .pipe(
          map((products: Product[]) =>
            products.some(
              (product: Product) =>
                product.floor === group.get('productFloor').value &&
                product.section === group.get('productSection').value &&
                product.id !== group.get('productId').value
            )
              ? { locationTaken: true }
              : null
          )
        );
    };
  }
}
