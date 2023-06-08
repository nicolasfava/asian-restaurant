import React from 'react'
import styles from '../style'

const Button = (props) => {
  return (
    <button className='bg-primary text-black text-[20px] font-markazi p-2 mt-6'>
        {props.title}
    </button>
  )
}

export default Button