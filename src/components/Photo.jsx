import React from 'react'
import styles from '../style'
import Button from './Button'
import image from '../costants/images'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

const images = [image.gallery01, image.gallery02, image.gallery04, image.gallery05, image.gallery07]

const Photo = () => {

  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    if(direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <section id='gallery' className='flex lg:flex-row flex-col bg-tertiary items-center xl:justify-center sm:px-24 px-6 sm:py-16 py-4 gap-12'>
      <div className='flex flex-col p-right-[2rem] sm:min-w-[500px]'>
        <p className={`${styles.paragraph_subTitle}`}>Gallery</p>
        <div className='w-[60px] h-[2px] bg-primary rounded-[10px]'/>
        <h2 className={`${styles.heading2} mt-4`}>
          Photo Gallery
        </h2>
        <p className={`${styles.paragraph}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
        </p>
        <Button title='View more'/>
      </div>
      <div className='flex flex-row flex-1 lg:max-w-[50%] max-w-[100%] relative items-center'>
        <div ref={scrollRef} className='flex flex-row gallery'>
          {images.map((image, index) => (
            <div className='relative min-w-[301px] mr-[2rem] card' key={`gallery-image-${index + 1}`}>
              <img src={image} alt='w-[100%] h-[100%] image relative'/>
              <BsInstagram className='icon'/>
            </div> 
          ))}
        </div>
        <div className='w-[100%] flex justify-between items-center py-0 px-[1rem] absolute bottom-[5%]'>
          <BsArrowLeftShort className='arrowIcon text-[2rem] cursor-pointer bg-tertiary rounded-[5px]' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='arrowIcon text-[2rem] cursor-pointer bg-tertiary rounded-[5px]' onClick={() => scroll('right')}/>
        </div>
      </div>
    </section>
  )
}

export default Photo