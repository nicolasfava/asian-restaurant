import React from 'react'
import Hero from './Hero'
import ramenHero from '../assets/ramenHero.png'

const Header = () => {
  return (
    <div>
        <Hero title='DISCOVER CHINESE CULTURE STARTING WITH ITS FOOD' subTitle='Home' text='we offer an amazing experience in chinese culture. All that you will see and heard comes from an accurate user experience study' img={ramenHero} button='Explore the menu'/>
    </div>
  )
}

export default Header