import React, {Fragment} from 'react'
import CartList from './CartList'

const Cart = ( props ) => {

  const { 
    cartList,
    totalCartValue, 
    handleIncrementQuantity, 
    handleDecrementQuantity, 
    handleDeleteItem 
  } = props

  return (
    <Fragment>
      <h1 className="text--page-heading">Cart</h1>
      <CartList
        cartList={cartList}
        handleIncrementQuantity={handleIncrementQuantity}
        handleDecrementQuantity={handleDecrementQuantity}
        handleDeleteItem={handleDeleteItem}
        totalCartValue={totalCartValue}
      />  
    </Fragment>
  )
}

export default Cart;