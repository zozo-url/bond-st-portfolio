import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Work from './Work'

const App = () => (
  <Router>
    <div className='app-container'>
      <Route path='' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Work} />
    </div>
  </Router>

)

export default App
