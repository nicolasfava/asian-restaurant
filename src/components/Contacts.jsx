import React from 'react'
import Hero from './Hero'
import drink from '../assets/drinkContacts.jpg'

const Contacts = () => {
  return (
    <section id='contacts'>
      <Hero title='Find us' subTitle='Contacts' img={drink} button='Visit us' text='Come to visit us, we are waiting you. You can find us in calle 14sur, la Veleta Tulum, Mexico. For reserve a table you can call the following number +52 9845263187' subParagraph='Opening hours' subParagraph2='Mon - Fry : 18:00 / 00:00' subParagraph3='Sat - Sun : 17:00 / 02:00'/>
    </section>
  )
}

export default Contacts