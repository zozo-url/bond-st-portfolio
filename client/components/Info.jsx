import React from 'react'
import Nav from './Nav'

const Info = () => (
  <div>
    <Nav />
    <div className='space-left'>
      <p>This is a description about Bond St. Bond St hosts dance music events and makes video content during these events. They aim to make really cool visual content related to dance music and fun times.</p>
      <div className='socials'>
        <a href='https://soundcloud.com/bond_st'><i className='fab fa-soundcloud' /></a>
        <a href='https://vimeo.com/bondst'><i className='fab fa-vimeo-square' /></a>
        <a href='https://www.instagram.com/bond__st/?hl=en'><i className='fab fa-instagram' /></a>
      </div>
    </div>
  </div>
)

export default Info
