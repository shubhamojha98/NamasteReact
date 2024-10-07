import React from 'react'
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constant';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {

  const onlineStatus=useOnlineStatus();
  return (
    <>
      <div className="flex justify-between items-center rounder-md shadow-lg">
        <div className="logo-container">
          <img className="w-28" src={LOGO_URL} alt='logo' />
        </div>
        
        <div className="flex text-black font-medium">
          <ul className='flex list-none m-2.5 p-2.5'>
            <li className='px-4'>Online Status:{onlineStatus?"✅":"❌"}</li>
            <li className='px-4'><Link to='/'>Home</Link></li>
            <li className='px-4'><Link to='/about'>About Us</Link></li>
            <li className='px-4'><Link to='/contact'>Contact Us</Link></li>
            <li className='px-4'><Link to='/grocery'>Grocery</Link></li>
            <li className='px-4'><i class="fa-solid fa-cart-shopping"></i> Cart</li>
          </ul>

        </div>
``
      </div>
    </>
  )
}

export default Header
