import React from 'react'
import { Link } from 'react-router-dom'
// menu + sub menu, must pass value in from the component it's it to know what to display
// map thru a .json file??
const Nav = () => (
  <div className='nav'>
    <h1>Nav</h1>
    <Link to='/info'><p className='subtitle'>INFO</p></Link>
    <Link to='/edit'><p className='subtitle'>EDIT</p></Link>
    <Link to='/unit'><p className='subtitle'>UNIT</p></Link>
  </div>
)

export default Nav
