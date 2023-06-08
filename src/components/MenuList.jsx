import React from 'react'
import styles from '../style'

const MenuList = (props) => {
  return (
    <div>
        <div className={`flex ${props.flex} flex-col object-contain justify-between flex-wrap xl:justify-center items-center sm:px-24 px-6 sm:py-16 py-4`}>
        <img src={props.img} className='sm:w-[40%] w-[100%]'/>
        <div className='flex flex-col sm:w-[50%] md:w-[40%] sm:ml-aut w-full'>
          <p className={`${styles.paragraph_subTitle}`}>Menu</p>
          <div className='w-[60px] h-[2px] bg-primary rounded-[5px]'/>
          <h2 className={`${styles.heading2} mt-4`}>{props.title}</h2>
          <div className='flex flex-col'>
            
              {props.list.map((item) => (
                <div className='flex flex-row items-center sm:mb-0 mb-4'>
                  <p className={`mr-auto ${styles.paragraph}`}>
                    {item.title}
                  </p>
                  <div className='w-[70px] h-[2px] bg-primary mr-4'/>
                  <p className={`${styles.paragraph}`}>
                    {item.price}
                  </p>
                </div>
              ))}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuList