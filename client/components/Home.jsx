import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/images/logo-black.png'

const Home = () => (
  <div className='home-container'>
    <img src={logo} className='logo-home' />
    <div className='home-menu'>
      {/* comment out the two lines below to remove them from view */}
      <Link to='/edit' className='menu-link home-menu-link'><p>EDIT</p></Link>
      <Link to='/unit' className='menu-link home-menu-link'><p>UNIT</p></Link>
      <div className='socials socials-home' align='center'>
        <a href='https://soundcloud.com/bond_st'><i className='fab fa-soundcloud' /></a>
        {/* put youtube link in below */}
        <a href='#'><i className='fab fa-youtube' /></a>
        <a href='https://www.instagram.com/bond__st/?hl=en'><i className='fab fa-instagram' /></a>
      </div>
    </div>
  </div>
)

export default Home
