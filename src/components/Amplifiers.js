import React, {Fragment} from 'react'
import ItemList from './ItemList'

const Amplifiers = (props) => {

  const { handleAddToCart } = props
  return (
    <Fragment>
      <h1 className="text--page-heading">Amplifiers</h1>
      <ItemList 
        category='amplifiers'
        handleAddToCart={handleAddToCart} 
      />
    </Fragment>
  )
}

export default Amplifiers;
