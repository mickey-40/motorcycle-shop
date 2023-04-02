import React from 'react';
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>&copy; 2023 Mickeys Motorcycle Shop All rights reserved</p>
      <p className='icons'>
        <BsInstagram />
        <BsTwitter />
      </p>
    </div>
  )
}

export default Footer