import { NgIf } from '@angular/common';
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

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  private getProductSubscription: Subscription;
  private addProductSubscription: Subscription;
  private deleteProductSubscription: Subscription;
  private updateProductSubscription: Subscription;

  public isNewProduct = true;

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
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) this.isNewProduct = false;

    this.buildForm();

    if (!this.isNewProduct) this.populateForm();
  }

  ngOnDestroy(): void {
    if (this.getProductSubscription) this.getProductSubscription.unsubscribe();

    if (this.addProductSubscription) this.addProductSubscription.unsubscribe();

    if (this.updateProductSubscription)
      this.updateProductSubscription.unsubscribe();

    if (this.deleteProductSubscription)
      this.deleteProductSubscription.unsubscribe();
  }

  private buildForm(): void {
    this.productForm = this.fb.group({
      productId: [null],
      productCode: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/[A-Z]{2,4}\s[0-9]{4,6}/),
        ]),
      ],
      productQuantity: [null, Validators.required],
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
    });
  }

  private populateForm(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.getProductSubscription = this.productService
      .getProduct(+id)
      .subscribe((product: Product) => {
        this.id.setValue(product?.id);

        this.code.setValue(product?.code);
        this.code.disable();

        this.quantity.setValue(product?.quantity);

        this.floor.setValue(product?.floor);

        this.section.setValue(product?.section);
      });
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
      this.addProductSubscription = this.productService
        .createProduct(product)
        .subscribe();
    }

    if (!this.isNewProduct) {
      this.updateProductSubscription = this.productService
        .updateProduct(product)
        .subscribe(() => this.router.navigate(['/home']));
    }
  }

  public onDelete(): void {
    this.deleteProductSubscription = this.productService
      .deleteProduct(this.id.value)
      .subscribe(() => this.router.navigate(['/home']));
  }
}
