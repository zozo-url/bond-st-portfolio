import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor (props) {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className='home-container'>
        <div className='homeBar'>
          <h1 className='title'>hey</h1>
          <Link to='/about'><p className='subtitle'>about</p></Link>
          <Link to='/projects'><p className='subtitle'>projects</p></Link>
        </div>
      </div>
    )
  }
}
export default Home
