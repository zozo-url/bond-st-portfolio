import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/images/bond-logo-white.png'
import house from '../../public/images/house.gif'

const Home = () => (
  <div className='home-container'>
    <div className='space'> </div>
    <img src={logo} className='logo-home' />
    {/* <img src={house} className='house' /> */}
    <div className='home-menu'>
      <Link to='/info' className='home-menu-link'><p>INFO</p></Link>
      <Link to='/edit' className='home-menu-link'><p>EDIT</p></Link>
      <Link to='/unit' className='home-menu-link'><p>UNIT</p></Link>
    </div>
  </div>
)

export default Home
