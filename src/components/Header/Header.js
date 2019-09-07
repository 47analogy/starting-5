import React from 'react'
import './header.scss'
import logo from '../../assets/nba-logo.png'

const Header = () => {
  return (
    <div className='header'>
      <img className='nba-logo' src={logo} alt='nba logo' />
      <div className='title'>Get updated stats for your favorite players!</div>
    </div>
  )
}

export default Header
