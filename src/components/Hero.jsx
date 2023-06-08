import React from 'react'
import styles from '../style'
import Button from './Button'


const Hero = (props) => {
  return (
    <div className={`px-24 py-12 w-full`}>
      <div className='flex lg:flex-row flex-col gap-6 justify-between xl:justify-center xl:gap-[500px] items-center py-12'>
        <div className='flex flex-col'>
            <p className={`${styles.paragraph_subTitle}`}>{props.subTitle}</p>
            <div className='w-[60px] h-[2px] rounded-[10px] bg-primary'/>
            <h1 className={`${styles.heading2}  max-w-[496px] mt-4`}>
              {props.title}
            </h1>
            <p className={`${styles.paragraph}  max-w-[464px]`}>
              {props.text}
            </p>
            {props.subParagraph && 
              <p className={`${styles.paragraph_subTitle} mt-4`}>{props.subParagraph}</p>
            }
            {props.subParagraph2 &&
              <p className={`${styles.paragraph}`}>{props.subParagraph2}</p>
            }
            {props.subParagraph3 &&
              <p className={`${styles.paragraph}`}>{props.subParagraph3}</p>            
            }
            <Button title={props.button}/>
        </div>
      <div className={`sm:w-[432px] sm:h-[468px] w-[256px] h-[280px] relative p-4`}> 
        <img src={props.img} className='z-[5] relative w-[100%] h-[100%]'/>
        <div className='w-[50%] sm:h-[312px] h-[123px] bg-primary absolute top-0 right-0 z-[0]'/>
        <div className='w-[50%] sm:h-[312px] h-[123px] bg-primary absolute bottom-0 left-0 z-[0]'/>
      </div>
      </div>
    </div>
  )
}

export default Hero