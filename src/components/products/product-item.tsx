import React from 'react';
import './style.css';
import {Products, ProductType} from './product-datas';
/**
* @author
* @function Header
**/

const ProductItem = (props: any) => {
  const product: ProductType = props.item;
  return(
    <div className="col-md-3 card">
        <img className="card-img-top" src={product.image} alt={product.description} width="100%"/>
        <p>{product.price} $</p>
        <p>{product.description}</p>

    </div>
   )

 }

export default ProductItem
