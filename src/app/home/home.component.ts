import { NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { ProductService } from '../product/data-access/product.service';
import { ProductFilters, Product } from '../shared/interfaces/product';
import { ProductListComponent } from './ui/product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent, NgIf, NgFor, RouterLink, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  public products: Product[] = [];
  public dropdownOprions = [1, 2, 3];

  public filtersForm: FormGroup;

  public get code(): FormControl {
    return <FormControl>this.filtersForm?.get('code');
  }

  public get floor(): FormControl {
    return <FormControl>this.filtersForm?.get('floor');
  }

  public get section(): FormControl {
    return <FormControl>this.filtersForm?.get('section');
  }

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.buildForm();
    this.filterProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getProducts(filters?: ProductFilters): void {
    this.productService
      .getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((products: Product[]) => {
        this.products = [...products];

        if (filters?.code) {
          const productFilteredByCode = this.products.filter(
            (product: Product) =>
              product.code.includes(filters?.code.toUpperCase())
          );
          this.products = [...productFilteredByCode];
        }

        if (filters?.floor) {
          const productFilteredByFloor = this.products.filter(
            (product: Product) => product.floor === +filters?.floor
          );
          this.products = [...productFilteredByFloor];
        }

        if (filters?.section) {
          const productFilteredBySection = this.products.filter(
            (product: Product) => product.section === +filters?.section
          );
          this.products = [...productFilteredBySection];
        }
      });
  }

  private buildForm(): void {
    this.filtersForm = this.formBuilder.group({
      code: [''],
      floor: [''],
      section: [''],
    });
  }

  private filterProducts(): void {
    this.filtersForm.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((filters: ProductFilters) => {
        this.getProducts(filters);
      });
  }

  public onClear(): void {
    this.filtersForm.reset();

    this.getProducts();
  }

  public onDelete($event: number): void {
    this.productService.deleteProduct($event).subscribe();

    this.getProducts();
  }
}
