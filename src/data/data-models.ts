export interface Product {
  id: number;
  name: string;
  image: string;
}

export interface ProductData {
  products: Product[];
  isLoading: boolean;
  error: string;
}