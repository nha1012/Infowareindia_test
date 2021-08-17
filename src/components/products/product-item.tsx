import React from 'react';
import './style.css';
import {Products, ProductType} from './product-datas';
import { Link } from 'react-router-dom';
/**
* @author
* @function Header
**/

const ProductItem = (props: any) => {
  const product: ProductType = props.item;
  return(
      <div className="col-md-3 card">
        <Link to={`products/` + product.id}>
          <img className="card-img-top" src={product.image} alt={product.description} width="100%"/>
        </Link>

          <p>{product.price} $</p>
          <p>{product.name}</p>
      </div>
   )

 }

export default ProductItem
