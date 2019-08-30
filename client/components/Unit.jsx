import React from 'react'
import Nav from './Nav'
import links from '../../video-links/links.json'

const Unit = () => (
  <div className='edit-unit'>
    <Nav />
    {links.unit.map((video, i) => {
      return <div className='video-div' id={video.title} key={i} align='right'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>{video.title}</h1> <h1>{video.date}</h1>
        <iframe className='video ' id={video.title} src={video.url} frameBorder='0' webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen='true' />
        <h1 align='right'>{video.description}</h1>
        <br />
        <br />
      </div>
    })}
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
)

export default Unit
