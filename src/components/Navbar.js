import React from 'react'
import { Link, NavLink, Route, useHistory } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'


const Navbar = (props) => {



  const 
  {
    cartQuantity, 
    totalCartValue, 
    handleSearchInputChange, 
    handleSearchSubmit,
    searchText
  } = props

  let history = useHistory()

  const handleSearchKeyUp = (e) => {
    e.preventDefault();
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleSearchSubmit();
      history.push('/searchResults')
    }
  }

  return (
    <nav className="container__navbar">
      <div className="navbar__left">
        <li><NavLink className="navbar__link" to="/speakers">Speakers</NavLink></li>
        <li><NavLink className="navbar__link" to="/amplifiers">Amplifiers</NavLink></li>
        <li><NavLink className="navbar__link" to="/about">About</NavLink></li>
      </div>
      <div className="navbar__middle">
        <li><NavLink className="navbar__link navbar__link--home" exact to="/">audiófilo puro</NavLink></li>
      </div>
      <div className="navbar__right">
        <input 
          type ='text'
          onChange={handleSearchInputChange}
          onKeyUp={handleSearchKeyUp}
          value={searchText}>
        </input>
        <li>
          <NavLink className="navbar__link" to="/searchResults" onClick={handleSearchSubmit}>Search</NavLink>
        </li>
        <SwitchTransition>
          <CSSTransition
          key={cartQuantity}
          timeout={ { exit:500, enter:500} }
          classNames={'navbar__link--cart-'}
          >
            <li><NavLink className="navbar__link navbar__link--cart" to="/cart">Cart 
              {cartQuantity? ` - ${(totalCartValue).toLocaleString(`en-US`,{
              style:'currency',
              currency:'CAD'
              })} (${cartQuantity})` 
              : null}</NavLink></li>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </nav>
  )
}

export default Navbar;