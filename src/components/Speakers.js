import React, { Fragment } from 'react'
import ItemList from './ItemList'

const Speakers = () => {
  return (
    <Fragment>
      <h1 className="text--category-heading">Speakers</h1>
      <ItemList category="speakers" />
    </Fragment>
  )
}

export default Speakers;
