import React from 'react'
import Nav from './Nav'
import links from '../../video-links/links.json'

const Edit = () => (
  <div className='edit'>
    <Nav />
    {links.edit.map((video, i) => {
      return <div className='video-div' key={i} align='right'>
        <br />
        <br />
        <br />
        <br />
        <h1 id={video.title}>{video.title}</h1>
        {/* <h1 align='right'>{video.description}</h1> */}
        {/* <h1>{video.date}</h1> */}
        <iframe className='video ' id={video.title} src={video.url} frameBorder='0' webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen='true' />
        <br />
        <br />
        <br />
      </div>
    })}
  </div>
)
export default Edit
