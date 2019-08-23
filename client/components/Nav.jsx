import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../../public/images/bond-logo-white.png'
import links from '../../video-links/links.json'
// menu + sub menu, must pass value in from the component it's it to know what to display
// map thru a .json file??
const Nav = () => (
  <div className='nav'>
    <Link to='/'><img src={logo} className='logo-nav' /></Link>
    <div className='menu nav-menu'>
      <Link to='/info'><p>INFO</p></Link>
      <Link to='/edit'><p>EDIT</p></Link>
      {window.location.href.split('#')[1] === '/edit' ? links.edit.map(video => {
        return <div><Link to={'/edit#' + video.title}>{video.title}</Link> <br /> </div>
      }) : console.log('') }
      <Link to='/unit'><p>UNIT</p></Link>
      {window.location.href.split('#')[1] === '/unit' ? links.unit.map(video => {
        return <div><Link to={'/edit#' + video.title}>{video.title}</Link> <br /> </div>
      }) : console.log('') }
    </div>
  </div>
)

export default Nav
