import React, { Fragment } from 'react'
import ItemList from './ItemList'

const Speakers = (props) => {
  const { handleAddToCart } = props
  return (
    <Fragment>
      <h1 className="text--page-heading">Speakers</h1>
      <ItemList 
        category="speakers" 
        handleAddToCart={ handleAddToCart }
      />
    </Fragment>
  )
}

export default Speakers;
