import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/images/bond-logo-white.png'
import house from '../../public/images/house.gif'

const Home = () => (
  <div className='home-container'>
    <div className='space'> </div>
    <img src={logo} className='logo-home' />
    {/* <img src={house} className='house' /> */}
    <div className='menu'>
      <Link to='/info'><p>INFO</p></Link>
      <Link to='/edit'><p>EDIT</p></Link>
      <Link to='/unit'><p>UNIT</p></Link>
    </div>
  </div>
)

export default Home
