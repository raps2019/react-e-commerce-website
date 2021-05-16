import React, { Fragment } from 'react'
import { useParams } from 'react-router';
import items from './items';


const ProductPage = () => {



  const { sku } = useParams();

  const item = items.find( item => item.sku.toString() === sku);
  console.log(item)

  return (
    <div className="container__product-page">
      <h1>{item.manufacturer} {item.model}</h1>
      <div className="container__item__thumbnail">
        <img src={item.image1} alt={item.model} className="item__thumbnail"/>
      </div>
      <p>{item.description}</p>
    </div>
  )
}

export default ProductPage;
