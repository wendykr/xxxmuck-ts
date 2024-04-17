import ReactDOM from 'react-dom/client'
import { HomePage } from './pages/HomePage/HomePage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import './index.scss';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { App } from './App.jsx';
import { ProductData } from '../src/data/data-models.ts'

let error = '';
let isLoading = true;

const fetchProducts = async (): Promise<ProductData> => {
  try {
    const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products');
    if (!response.ok) {
      if (response.status === 400) {
        error = 'Load data error';
      } else {
        error = 'Load data error';
      }
      isLoading = false;
      throw new Error(error);
    }
    isLoading = false;
    const data = await response.json();
    const products = data;
    return { products, isLoading, error };
  } catch (err) {
    error = 'Load data error';
    isLoading = false;
    throw new Error(error);
  }
};

const createRouter = async (): Promise<void> => {
  const productData = await fetchProducts();
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route
          path="/"
          element={
            productData ? (
              <HomePage
                products={productData.products}
                isLoading={productData.isLoading}
                error={productData.error}
              />
            ) : (
              <div>Loading data...</div>
            )
          }
        />
        <Route
          path="/product/:productId"
          element={
            productData ? (
              <ProductPage
                products={productData.products}
                isLoading={productData.isLoading}
                error={productData.error}
              />
            ) : (
              <div>Loading data...</div>
            )
          }
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Route>
    ),
    { basename: "/xxxmuck-ts" }
  );
  
  const rootElement: HTMLElement = document.getElementById('root')!;
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
};

createRouter();