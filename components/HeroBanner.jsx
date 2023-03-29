import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const HeroBanner = ({HeroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        {console.log(HeroBanner)}
        <p className='beats-solo'>{HeroBanner.smallText}</p>
        <h3>{HeroBanner.midText}</h3>
        <h3>{HeroBanner.largeText1}</h3>
        <img src={urlFor(HeroBanner.image)} alt='motorcycle helmet'  className='hero-banner-image'/>
        <div>
          <Link href={`/product/${HeroBanner.product}`}>
            <button type='button'>{HeroBanner.buttonText}</button>
          </Link>
          
          <div className='desc'>
            <h5>Description</h5>
            <>{HeroBanner.desc}</>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroBanner