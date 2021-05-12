import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="container__navbar">
      <div className="navbar__left">
        <li><NavLink className="navbar__link" to="/speakers">Speakers</NavLink></li>
        <li><NavLink className="navbar__link" to="/amplifiers">Amplifiers</NavLink></li>
        <li><NavLink className="navbar__link" to="/about">About</NavLink></li>
      </div>
      <div className="navbar__middle">
        <li><NavLink className="navbar__link navbar__link--home" exact to="/">audiophile</NavLink></li>
      </div>
      <div className="navbar__right">
        <li><NavLink className="navbar__link" to="/cart">Cart</NavLink></li>
      </div>
    </nav>
  )
}

export default Navbar;