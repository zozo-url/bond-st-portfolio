import React from 'react'
import Nav from './Nav'
import links from '../../video-links/links.json'

const Edit = () => (
  <div className='edit'>
    <Nav />
    <h1 align='right'>EDIT</h1>
    {links.edit.map((video, i) => {
      return <div key={i} align='right'>
        <h1 id={video.title}>{video.title}</h1>
        <h1>{video.date}</h1>
        <iframe src={video.url} width='500' height='281' frameBorder='0' webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen='true' />
        <br />
        <p>{video.description}</p>
      </div>
    })}
  </div>
)
export default Edit
