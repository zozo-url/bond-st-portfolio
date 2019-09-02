import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/images/logo-black.png'

const Home = () => (
  <div className='home-container'>
    <div className='space'> </div>
    <img src={logo} className='logo-home' />
    {/* <img src={house} className='house' /> */}
    <div className='home-menu'>
      <Link to='/info' className='menu-link home-menu-link'><p>INFO</p></Link>
      <Link to='/edit' className='menu-link home-menu-link'><p>EDIT</p></Link>
      <Link to='/unit' className='menu-link home-menu-link'><p>UNIT</p></Link>
      <div className='socials socials-home' align='center'>
        <a href='https://soundcloud.com/bond_st'><i className='fab fa-soundcloud' /></a>
        <a href='https://vimeo.com/bondst'><i className='fab fa-vimeo-square' /></a>
        <a href='https://www.instagram.com/bond__st/?hl=en'><i className='fab fa-instagram' /></a>
      </div>
    </div>
  </div>
)

export default Home
