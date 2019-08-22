import React from 'react'
import Nav from './Nav'

const Info = () => (
  <div className='info'>
    <Nav />
    <p id='description'>This is a description about Bond St. Bond St hosts dance music events and makes video content during these events. They aim to make really cool visual content related to dance music and fun times.</p>
    <div className='socials'>
      <i class='fab fa-facebook-square' />
      <i class='fab fa-vimeo-square' />
      <i class='fab fa-bandcamp' />
    </div>
  </div>
)

export default Info
