import React from 'react'
import Link from 'next/link'
import { IoIosCart } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">Helmet</Link>
      </p>
      <button type='button' className='cart-icon' onClick=''>
        <IoIosCart />
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default Navbar