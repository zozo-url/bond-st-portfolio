import React from 'react'
import Nav from './Nav'
class Edit extends React.Component {
  constructor (props) {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className='home-container'>
        <Nav />
        <h1>EDIT</h1>
      </div>
    )
  }
}
export default Edit
