export interface Product {
  id: number;
  code: string;
  quantity: number;
  floor: number;
  section: number;
}

export interface ProductFilters {
  code?: string;
  floor?: number;
  section?: number;
}
