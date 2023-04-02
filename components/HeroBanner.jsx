import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const HeroBanner = ({HeroBanner}) => {
  // console.log(HeroBanner)
  return (
    <div className='hero-banner-container'>
      <div>
        {/* {console.log(HeroBanner.product)} */}
        <p className='helmet'>{HeroBanner.smallText}</p>
        <h3>{HeroBanner.midText}</h3>
        <h3>{HeroBanner.largeText1}</h3>
        <picture>
          <img src={urlFor(HeroBanner.image)} alt='motorcycle helmet'  className='hero-banner-image'/>
        </picture>
        
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