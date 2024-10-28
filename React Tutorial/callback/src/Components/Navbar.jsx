import React from 'react'
import {memo} from 'react'


const Navbar = ({adjective, getAdjective}) => {
    console.log('navbar is rerendered')
  return (
    <div>
      I am a {adjective} Navbar
    </div>
  )
}

export default memo(Navbar)
