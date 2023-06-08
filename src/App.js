import React from 'react'
import './index.css'
import { Navbar, Header, Aboutus, Menu, Photo, Contacts, Newsletter, Footer } from './components'
import styles from './style'

const App = () => {
  return (
    <main className='w-full bg-texture'>
        <div className='bg-tertiary'>
            <Navbar />
            <Header />
        </div>
        <Aboutus />
        <Menu />
        <Photo />
        <Contacts />
        <Footer />
    </main>
  )
}

export default App