import React from 'react'
import { Products } from '../products/product-datas';

function ProductDetail(props: any) {
  const id = +props.match.params.id;
  const product = Products.filter((product)=> product.id === id)[0];
  if(!product) return
  return (
    <div className="row">
      <div className="col-md-8">
        <img src={product.image} alt="" />
      </div>
      <div className="col-md-4">
        <i>Price: </i>
        <i>{product.price}$</i>
        <p>{product.description}</p>
      </div>
    </div>
    )
}

export default ProductDetail
