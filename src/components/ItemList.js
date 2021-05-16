import React from 'react'
import items from './items';
import { Link, NavLink, Route, Switch } from 'react-router-dom'


const ItemList = (props) => {

  const { category, handleAddToCart } = props;

  const filteredItems = items.filter( item => item.category === category)

  return (
    <div className="container__item-list">
      {filteredItems.map( (item) => (
        <div key={item.sku} className="container__item">
          <div className="container__item__thumbnail">
            <img src={item.image1} alt={item.model} className="item__thumbnail"/>
          </div>
          <div className="container__item__details">
            <div className="container__item__details__top-row">
              <p className="text--item-heading">{item.manufacturer} {item.model}</p>
              <div className="container__buttons">
                <button className="button" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                <Link key={item.sku} to={`/productPage/${item.sku}`}>Learn More</Link>
              </div>
            </div>
            <p>{item.description}</p>
            <p className='text--price'>{(item.price).toLocaleString(`en-US`,{
              style:'currency',
              currency:'CAD'
            })}</p>
          </div>
          {/* <Switch>
            <Route path={`/${item.category}/${item.model}`} component={Product} item={item}/> 
          </Switch> */}
        </div>
      ))}
    </div>
  )
}

export default ItemList
