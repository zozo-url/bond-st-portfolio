import React from 'react'
import Nav from './Nav'

const Info = () => (
  <div>
    <Nav />
    <div className='info' align='right'>
      <p className='info-text' align='right'>THIS IS A DESCRIPTION ABOUT BOND ST. BOND ST HOSTS DANCE MUSIC EVENTS AND MAKES VIDEO CONTENT DURING THESE EVENTS. THEY AIM TO MAKE REALLY COOL VISUAL CONTENT RELATED TO DANCE MUSIC AND FUN TIMES.</p>
      <div className='socials' align='right'>
        <a href='https://soundcloud.com/bond_st'><i className='fab fa-soundcloud' /></a>
        <a href='https://vimeo.com/bondst'><i className='fab fa-vimeo-square' /></a>
        <a href='https://www.instagram.com/bond__st/?hl=en'><i className='fab fa-instagram' /></a>
      </div>
    </div>
  </div>
)

export default Info
