import React from 'react'
import Newsletter from './Newsletter'
import styles from '../style'

const Footer = () => {
  return (
    <section className='relative mt-[200px]' id='newsletter'>
      <Newsletter />
      <div className='w-full bg-tertiary flex md:flex-row flex-col items-center justify-center  px-24 py-24'>
        
        <div className={`ml-auto mr-auto order-1 my-12 md:my-0 flex flex-col items-center gap-[20px]`}>  
          <h2 className={`${styles.heading2}`}>ASIAN</h2>
        </div>
        <div className='flex flex-col items-center order-2'>
          <h2 className={`${styles.heading2} text-center`}>
            Working hours
          </h2>
          <p className={`${styles.paragraph} text-center`}>
            Mon - Fry : 18:00 / 00:00
          </p>
          <p className={`${styles.paragraph} text-center`}>
            Sat - Sun : 17:00 / 02:00
          </p>
        </div>
        <div className='flex flex-col items-center order-0'>
          <h2 className={`${styles.heading2} text-center`}>Contact us</h2> 
          <p className={`${styles.paragraph} text-center`}>Calle 14sur, la Veleta Tulum, Mexico</p>
          <p className={`${styles.paragraph} text-center`}>+52 9841685217</p>
        </div>
      </div>
    </section>
  )
}

export default Footer

//<Newsletter />