import './ProductPage.scss';
import { Button } from '../../components/Button/Button';
import { useParams } from 'react-router-dom';
import { ProductData } from '../../data/data-models';

export const ProductPage = ({ products, isLoading, error }: ProductData): JSX.Element => {
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