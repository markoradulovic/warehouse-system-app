export interface Product {
  id: number;
  code: string;
  quantity: number;
  floor: number;
  section: number;
}

export interface Filters {
  productCode?: string;
  productFloor?: number;
  productSection?: number;
}
