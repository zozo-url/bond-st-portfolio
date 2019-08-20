import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/images/bond-logo-white.png'
import house from '../../public/images/house.gif'
// replace title with image
// add video logo
// css = centre everything
// make responsive
const Home = () => {
  return (
    <div className='home-container'>
      <div className='space'> </div>
      <img src={logo} className='logo' />
      <img src={house} className='house' />
      <div className='home-menu'>
        <Link to='/info'><p className='subtitle'>INFO</p></Link>
        <Link to='/edit'><p className='subtitle'>EDIT</p></Link>
        <Link to='/unit'><p className='subtitle'>UNIT</p></Link>
      </div>
    </div>
  )
}
export default Home
