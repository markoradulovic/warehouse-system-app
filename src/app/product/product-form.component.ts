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
import { Subscription } from 'rxjs';
import { ProductService } from '../shared/data-access/product.service';
import { Product } from '../shared/interfaces/product';
import { ProductsValidator } from './utils/products.validator';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  public isNewProduct: boolean;

  public productForm: FormGroup;

  public get id(): FormControl {
    return <FormControl>this.productForm?.get('productId');
  }

  public get code(): FormControl {
    return <FormControl>this.productForm?.get('productCode');
  }

  public get quantity(): FormControl {
    return <FormControl>this.productForm?.get('productQuantity');
  }

  public get floor(): FormControl {
    return <FormControl>this.productForm?.get('productFloor');
  }

  public get section(): FormControl {
    return <FormControl>this.productForm?.get('productSection');
  }

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getRouteData();
    if (!this.isNewProduct) this.populateForm();
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length > 0)
      this.subscriptions.forEach(
        (subscription: Subscription) => subscription.unsubscribe
      );
  }

  private buildForm(): void {
    this.productForm = this.formBuilder.group(
      {
        productId: [null],
        productCode: [
          null,
          Validators.compose([
            Validators.required,
            Validators.pattern(/[A-Z]{2,4}\s[0-9]{4,6}/),
          ]),
          ProductsValidator.uniqueCodeValidator(this.productService),
        ],
        productQuantity: [
          null,
          Validators.compose([Validators.required, Validators.max(100)]),
        ],
        productFloor: [
          null,
          Validators.compose([
            Validators.required,
            Validators.min(1),
            Validators.max(3),
          ]),
        ],
        productSection: [
          null,
          Validators.compose([
            Validators.required,
            Validators.min(1),
            Validators.max(3),
          ]),
        ],
      },
      {
        validators: null,
        asyncValidators: ProductsValidator.checkLocationValidator(
          this.productService
        ),
      }
    );
  }

  private populateForm(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.subscriptions.push(
      this.productService.getProduct(+id).subscribe((product: Product) => {
        this.id.setValue(product?.id);
        this.code.setValue(product?.code);
        this.code.disable();
        this.quantity.setValue(product?.quantity);
        this.floor.setValue(product?.floor);
        this.section.setValue(product?.section);
      })
    );
  }

  private getRouteData() {
    this.subscriptions.push(
      this.route.data.subscribe((data: any) => (this.isNewProduct = data.isNew))
    );
  }

  public onSave(): void {
    const product: Product = {
      id: this.id.value ? this.id.value : Math.floor(Math.random() * 100),
      code: this.code.value,
      quantity: this.quantity.value,
      floor: this.floor.value,
      section: this.section.value,
    };

    if (this.isNewProduct) {
      this.subscriptions.push(
        this.productService
          .createProduct(product)
          .subscribe(() => this.router.navigate(['/home']))
      );
    }

    if (!this.isNewProduct) {
      this.subscriptions.push(
        this.productService
          .updateProduct(product)
          .subscribe(() => this.router.navigate(['/home']))
      );
    }
  }

  public onDelete(): void {
    this.subscriptions.push(
      this.productService
        .deleteProduct(this.id.value)
        .subscribe(() => this.router.navigate(['/home']))
    );
  }
}
