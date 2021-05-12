import React from 'react'
import items from './items';

const ItemList = (props) => {

  const { category } = props;

  const filteredItems = items.filter( item => item.category === category)

  return (
    <div className="container__item-list">
      {filteredItems.map( (item) => (
        <div key={`${item.manufacturer}${item.model}`} className="container__item">
          <div className="container__item__thumbnail">
            <img src={item.image1} alt={item.model} className="item__thumbnail"/>
          </div>
          <div className="container__item__details">
            <div className="container__item__details__top-row">
              <p className="text--item-heading">{item.manufacturer} {item.model}</p>
              <div className="container__buttons">
                <button className="button">Add to Cart</button>
                <button className="button">Learn More</button>
              </div>
            </div>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
