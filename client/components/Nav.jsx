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

      {window.location.href.split('#')[1] === '/info' ? <Link to='/info' className='menu-link nav-menu-link'><p className='bold-title'>INFO</p></Link> : <Link to='/info' className='menu-link nav-menu-link'><p>INFO</p></Link>}
      {window.location.href.split('#')[1] === '/edit' ? <Link to='/edit' className='menu-link nav-menu-link'><p className='bold-title'>EDIT</p></Link> : <Link to='/edit' className='menu-link nav-menu-link'><p>EDIT</p></Link>}
      {window.location.href.split('#')[1] === '/edit' ? links.edit.map(video => {
        return <div className='sub-menu'>
          <Link to={'/edit#' + video.title} className='menu-link nav-menu-link sub-link'>{video.title}</Link>
        </div>
      }) : console.log('') }

      {window.location.href.split('#')[1] === '/unit' ? <Link to='/unit' className='menu-link nav-menu-link'><p className='bold-title'>UNIT</p></Link> : <Link to='/unit' className='menu-link nav-menu-link'><p>UNIT</p></Link>}

      {window.location.href.split('#')[1] === '/unit' ? links.unit.map(video => {
        return <div className='sub-menu'>
          <Link to={'/edit#' + video.title} className='menu-link nav-menu-link sub-link'>{video.title}</Link>
        </div>
      }) : console.log('') }

      {/* mobile version of menu */}
      {window.location.href.split('#')[1] === '/edit' ? links.edit.map(video => {
        return <div className='sub-menu sub-menu-mobile'>
          <Link to={'/edit#' + video.title} className='menu-link nav-menu-link sub-link-mobile'>{video.title}</Link>
        </div>
      }) : console.log('') }
      {window.location.href.split('#')[1] === '/unit' ? links.unit.map(video => {
        return <div className='sub-menu sub-menu-mobile'>
          <Link to={'/edit#' + video.title} className='menu-link nav-menu-link sub-link-mobile'>{video.title}</Link>
        </div>
      }) : console.log('') }
    </div>
  </div>
)

export default Nav
