import React from 'react'
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constant';
const Header = () => {
  return (
    <>
      <div className="header ">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt='logo' />
        </div>
        
        <div className="navitems">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><i class="fa-solid fa-cart-shopping"></i> Cart</li>
          </ul>

        </div>

      </div>
    </>
  )
}

export default Header
