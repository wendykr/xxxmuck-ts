import './ProductPage.scss';
import { Button } from '../../components/Button/Button';
import { useParams } from 'react-router-dom';
import { Product } from '../../data/data-models';

interface Props {
  products: Product[];
  isLoading: boolean;
  error: string;
}

export const ProductPage = ({ products, isLoading, error }: Props): JSX.Element => {
  const { productId } = useParams<{ productId: string }>();
  const productData = products.find((product) => product.id == productId);


  return (
    <main className="productPage">
    {
      isLoading ?
        <>Loading data...</>
      : error ?
        <>{error}</>
      :
        <>
          {productData ? (
            <>
              <img src={productData.image} className="productPage__image"/>
              <div className="productPage__container">
                <h2 className="productPage__title">{productData.name}</h2>
                <Button />
              </div>
            </>
          ) : (
            <>Product not found</>
          )}
        </>
    }
    </main>
  )
}