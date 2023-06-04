import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <span onClick={()=>window.scrollTo(0,0)} className='header'>Watchflix</span>
  )
}

export default Header