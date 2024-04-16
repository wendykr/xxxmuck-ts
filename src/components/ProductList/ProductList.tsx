import './ProductList.scss'
import { Product } from '../../data/data-models';
import { ProductItem } from '../ProductItem/ProductItem';

interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props): JSX.Element => {
  return (
    <div className="productList">
      {
        products.map((product, index) => <ProductItem name={product.name} image={product.image} id={product.id} key={index} />)
      }
    </div>
  )
}