import React, {Fragment} from 'react'
import ItemList from './ItemList'

const Amplifiers = () => {
  return (
    <Fragment>
      <h1 className="text--category-heading">Amplifiers</h1>
      <ItemList category='amplifiers' />
    </Fragment>
  )
}

export default Amplifiers;
