import React from 'react'
import { navLinks } from '../costants'
import styles from '../style';
import menu from '../assets/menu.png'
import close from '../assets/close.png'

const Navbar = () => {


  const [active, setActive] = React.useState("Home");
  const [toggle, setToggle] = React.useState(false);

  return (
      <nav className={`w-full flex px-24 py-6 justify-between items-center`}>
        <h2 className={`${styles.heading2}`}>
          ASIAN
        </h2>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-secondary" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} ${styles.menu}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain filterColors"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </nav>

  )
}

export default Navbar