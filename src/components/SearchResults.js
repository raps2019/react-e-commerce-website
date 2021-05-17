import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const SearchResults = (props) => {
  const { searchResults, searchText } = props

  let searchResultsContent = '';

  if (searchResults.length === 0) {
    if (searchText === '') {
      searchResultsContent = <p>Enter search text</p>
     } else {
       searchResultsContent = <p>No Items Found</p>
     }
  } else {
    searchResultsContent = 
    <div className="container__item-list container__results">
      <TransitionGroup>
      {searchResults.map( item => 
      (
        <CSSTransition
          key={item.sku} 
          appear={true}
          timeout={ { appear: 1000, enter:1000, exit:500 }}
          classNames={'container__item--results-'}
        >
          <div className="container__item container__item--results">
            <div className="container__item__thumbnail container__item__thumbnail--results">
              <img src={item.image1} alt={item.model} className="item__thumbnail"/>
            </div>
            <p>{item.manufacturer} {item.model}</p>
          </div>
          </CSSTransition>
          ))}
      </TransitionGroup>
      </div>
  }



  return (
    <div>
      {searchResultsContent}
    </div>
  )
}

export default SearchResults


