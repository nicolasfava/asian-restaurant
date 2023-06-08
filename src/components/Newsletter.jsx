import React from 'react'
import styles from '../style'


const Newsletter = () => {
  return (
      <div className='bg-tertiary md:w-[50%] mx-auto w-[100%] border-[1px] flex flex-col items-center py-6'>
        <p className={`${styles.paragraph_subTitle}`}>Newsletter</p>
        <div className='w-[60px] h-[2px] rounded-[10px] bg-primary'/>
        <h2 className={`${styles.heading2}`}>
          Join to our newsletter
        </h2>
        <p className={`${styles.paragraph}`}>
          to recive all the new events and menus
        </p>
        <div className='w-[100%] flex justify-center items-center gap-6 mt-4'>
          <input type='text' placeholder='Enter your email address' className='w-[30%] px-4 py-1 font-markazi text-secondary bg-tertiary border-[1px]'/>
          <button type='button' className='bg-primary px-4 py-1 text-tertiary  font-markazi'>Join</button>
        </div>
      </div>
  
  )
}

export default Newsletter