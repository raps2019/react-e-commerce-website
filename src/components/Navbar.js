import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'


const Navbar = (props) => {
  const {cartQuantity} = props
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
        <SwitchTransition>
          <CSSTransition
          key={cartQuantity}
          timeout={ { exit:500, enter:500} }
          classNames={'navbar__link--cart-'}
          >
            <li><NavLink className="navbar__link navbar__link--cart" to="/cart">Cart ({cartQuantity})</NavLink></li>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </nav>
  )
}

export default Navbar;