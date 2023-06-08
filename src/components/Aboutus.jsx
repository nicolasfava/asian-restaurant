import React from 'react'
import styles from '../style'
import bacchette from '../assets/bacchette.png'

const Aboutus = () => {
  return (
    <section id='aboutUs' className='p-6 w-full'>
      <div className='flex md:flex-row flex-col sm:px-16 px-6 sm:py-16 py-4 xl:justify-center'>
        <div className='flex flex-col md:justify-end py-12'>
          <p className={`${styles.paragraph_subTitle}`}>About</p>
          <div className='w-[60px] h-[2px] bg-primary rounded-[5px]'/>
          <h2 className={`${styles.heading2} mt-4`}>About us</h2>
          <p className={`${styles.paragraph}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
          </p>
        </div>
        <img src={bacchette} className={`md:h-[500px] md:flex hidden rotated mr-12`}/>
        <div className='flex flex-col'>
          <p className={`${styles.paragraph_subTitle}`}>About</p>
          <div className='w-[45px] h-[2px] bg-primary rounded-[5px]'/>
          <h2 className={`${styles.heading2} mt-4`}>Our history</h2>
          <p className={`${styles.paragraph}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Aboutus