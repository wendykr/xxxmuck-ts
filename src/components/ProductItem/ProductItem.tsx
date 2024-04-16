import './ProductItem.scss';
import { NavLink } from 'react-router-dom';

interface Props {
  id: number;
  name: string;
  image: string;
}

export const ProductItem = ({ id, name, image }: Props): JSX.Element => {
  return (
    <NavLink to={`/product/${id}`} className="productItem">
      <img src={image} className="productItem__image"/>
      <h2 className="productItem__title">{name}</h2>
    </NavLink>
  )
}