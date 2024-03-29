import { NgClass, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Product } from '../shared/interfaces/product';
import { ProductService } from './data-access/product.service';
import { CODE_PATTERN } from './utils/constants';
import { ProductsValidator } from './utils/products.validator';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  public isNewProduct: boolean;

  public productForm: FormGroup;

  public get id(): FormControl {
    return <FormControl>this.productForm?.get('id');
  }

  public get code(): FormControl {
    return <FormControl>this.productForm?.get('code');
  }

  public get quantity(): FormControl {
    return <FormControl>this.productForm?.get('quantity');
  }

  public get floor(): FormControl {
    return <FormControl>this.productForm?.get('floor');
  }

  public get section(): FormControl {
    return <FormControl>this.productForm?.get('section');
  }

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.checkIsNew();

    if (!this.isNewProduct) this.populateForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private buildForm(): void {
    this.productForm = this.formBuilder.group(
      {
        id: [null],
        code: [
          null,
          [Validators.required, Validators.pattern(CODE_PATTERN)],
          ProductsValidator.uniqueCodeValidator(this.productService),
        ],
        quantity: [
          null,
          [Validators.required, Validators.min(1), Validators.max(100)],
        ],
        floor: [
          null,
          [Validators.required, Validators.min(1), Validators.max(3)],
        ],
        section: [
          null,
          [Validators.required, Validators.min(1), Validators.max(3)],
        ],
      },
      {
        validators: null,
        asyncValidators: ProductsValidator.emptyLocationValidator(
          this.productService
        ),
      }
    );
  }

  private populateForm(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.productService
      .getProduct(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((product: Product) => {
        this.id.setValue(product?.id);
        this.code.setValue(product?.code);
        this.code.disable();
        this.quantity.setValue(product?.quantity);
        this.floor.setValue(product?.floor);
        this.section.setValue(product?.section);
      });
  }

  private checkIsNew(): void {
    this.route.data
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data: any) => (this.isNewProduct = data?.isNew ? true : false)
      );
  }

  private createProduct(product: Product): void {
    this.productService
      .createProduct(product)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.router.navigate(['/home']));
  }

  private updateProduct(product: Product): void {
    this.productService
      .updateProduct(product)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.router.navigate(['/home']));
  }

  public onSave(): void {
    const product: Product = this.productForm.getRawValue();

    if (this.isNewProduct) {
      this.createProduct(product);
    } else {
      this.updateProduct(product);
    }
  }
}
