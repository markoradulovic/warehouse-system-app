import { NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { ProductService } from '../shared/data-access/product.service';
import { Filters, Product } from '../shared/interfaces/product';
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
    return <FormControl>this.filtersForm?.get('productCode');
  }

  public get floor(): FormControl {
    return <FormControl>this.filtersForm?.get('productFloor');
  }

  public get section(): FormControl {
    return <FormControl>this.filtersForm?.get('productSection');
  }

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
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

  private getProducts(code?: string, floor?: number, section?: number): void {
    this.productService
      .getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((products: Product[]) => {
        this.products = [...products];

        if (code) {
          const productFilteredByCode = this.products.filter(
            (product: Product) => product.code.includes(code.toUpperCase())
          );
          this.products = [...productFilteredByCode];
        }

        if (floor) {
          const productFilteredByFloor = this.products.filter(
            (product: Product) => product.floor === floor
          );
          this.products = [...productFilteredByFloor];
        }

        if (section) {
          const productFilteredBySection = this.products.filter(
            (product: Product) => product.section === section
          );
          this.products = [...productFilteredBySection];
        }
      });
  }

  private buildForm(): void {
    this.filtersForm = this.formBuilder.group({
      productCode: [''],
      productFloor: [''],
      productSection: [''],
    });
  }

  private filterProducts(): void {
    this.filtersForm.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((filters: Filters) => {
        this.getProducts(
          filters?.productCode,
          +filters?.productFloor,
          +filters?.productSection
        );
      });
  }

  public onClear(): void {
    this.code.setValue('');
    this.floor.setValue('');
    this.section.setValue('');

    this.getProducts();
  }
}
