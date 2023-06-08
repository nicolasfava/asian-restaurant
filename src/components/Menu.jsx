import React from 'react'
import plate from '../assets/plate_menu.png'
import drink from '../assets/drink.png'
import styles from '../style'
import { ramens } from '../costants'
import { cocktails } from '../costants'
import MenuList from './MenuList'

const Menu = () => {
  return (
    <section id='menu'>
      <div className='bg-tertiary'>
        <MenuList title='Ramens' img={plate} list={ramens} flex='sm:flex-row'/>
      </div>
      <div>
        <MenuList title='Cocktail' img={drink} list={cocktails} flex='sm:flex-row-reverse'/>
      </div>
    </section>
  )
}

export default Menu