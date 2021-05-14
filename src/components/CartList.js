import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const CartList = (props) => {

  const { 
    cartList, 
    totalCartValue,
    handleIncrementQuantity, 
    handleDecrementQuantity,
    handleDeleteItem 
  } = props;

  return (
    <div>
      <div className="container__item-list container__cart">
      <TransitionGroup>
      {cartList.map( item => 
      (
        <CSSTransition
          key={item.sku} 
          timeout={800}
          classNames={'container__item--cart-'}
        >
          <div className="container__item container__item--cart">
            <div className="container__item__thumbnail container__item__thumbnail--cart">
              <img src={item.image1} alt={item.model} className="item__thumbnail"/>
            </div>
            <p>{item.manufacturer} {item.model}</p>
            <div className="container__cart-quantity">
              <p>{item.quantity}</p>
              <button 
                className="button"
                onClick={() => handleDecrementQuantity(item.sku, item.quantity)}
              >-</button>
              <button 
                className="button" 
                onClick={() => handleIncrementQuantity(item.sku)}
              >+</button>
            </div>
            <p className="cart-item-price">{(item.price * item.quantity).toLocaleString(`en-US`,{
              style:'currency',
              currency:'CAD'
            })}</p>
            <button className="button button--delete" onClick={() => handleDeleteItem(item.sku)}>Delete</button>
          </div>
          </CSSTransition>
          ))}
      </TransitionGroup>
      </div>
      { cartList.length > 0
      ? <p className="text--total-cart-value">Total: {totalCartValue.toLocaleString(`en-US`,{
          style:'currency',
          currency:'CAD'
          })}
      </p>
      : <p className="text--total-cart-value">Cart is Empty</p>}
    </div>
    
  )
}

export default CartList;
