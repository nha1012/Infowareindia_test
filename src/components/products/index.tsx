import React from 'react';
import './style.css';
import {Products, ProductType} from './product-datas';
import ProductItem from './product-item';
/**
* @author
* @function Header
**/

const Home = () => {
  return(
    <div>
        <h1>All Products</h1>
        <div className="row products">
            {Products.map((item: ProductType, key)=>{
                return <ProductItem item={item}/>
            })}

        </div>
    </div>
   )

 }

export default Home
