export interface Product {
  id: string;
  name: string;
  image: string;
}

export interface ProductData {
  products: Product[];
  isLoading: boolean;
  error: string;
}