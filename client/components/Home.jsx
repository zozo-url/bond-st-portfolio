import React from 'react'
import { Link } from 'react-router-dom'

// replace title with image
// add video logo
// css = centre everything
// make responsive
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
          <h1 className='title'>BOND ST</h1>
          <Link to='/info'><p className='subtitle'>INFO</p></Link>
          <Link to='/edit'><p className='subtitle'>EDIT</p></Link>
          <Link to='/unit'><p className='subtitle'>UNIT</p></Link>
        </div>
      </div>
    )
  }
}
export default Home
