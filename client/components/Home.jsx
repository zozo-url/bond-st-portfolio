import React from 'react'

class Home extends React.Component {
    constructor(props){
      super()
      this.state = {

      }
    }
    render() {
    return (
    <div className='home-container'>
        {/* <div className= "hamburger">
            <i className="fas fa-bars"></i>
        </div> */}
        <div className="itemCenter">
            {/* <h1 className="homeHeader">ZOE CLAASEN</h1> */}
        </div>
            <div className="side">
                <button className="circleButtonUp"><i className="fa fa-arrow-up arrowUp" aria-hidden="true"></i></button>
                <button className="circleButtonDown"><i className="fa fa-arrow-down arrowDown" aria-hidden="true"></i></button>
                <button className="circleButtonAbout"><h1 className="aboutText">ABOUT</h1></button>
            </div>            
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, animi! Maxime quaerat fugiat rerum voluptas eos, voluptatem accusamus quasi perspiciatis aperiam, suscipit, aliquam laudantium commodi facere doloribus aspernatur iusto est.</p>
            {/* <img className="uoasc" src="./images/uoasc2.png"/> */}

    </div>
    
    )
    }

}
  
export default Home
