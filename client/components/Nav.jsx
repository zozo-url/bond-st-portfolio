import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/images/bond-logo-white.png'
// menu + sub menu, must pass value in from the component it's it to know what to display
// map thru a .json file??
const Nav = () => (
  <div className='nav'>
    <Link to='/'><img src={logo} className='logo-nav' /></Link>
    <div className='menu nav-menu'>
      <Link to='/info'><p>INFO</p></Link>
      <Link to='/edit'><p>EDIT</p></Link>
      <Link to='/unit'><p>UNIT</p></Link>
    </div>

  </div>
)

export default Nav
