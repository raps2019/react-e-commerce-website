import React, {Fragment} from 'react'
import shopSpeakers from '../images/homepage/shopSpeakers.jpg'
import shopAmplifiers from '../images/homepage/shopAmplifiers.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Fragment>
      <div className="container__home-page">
        <Link to="/speakers" className='container__shop-category'>
          <h1 className="text--image-centered">Shop Speakers</h1>
          <img className="image--shop-category" src={shopSpeakers}></img>
        </Link>
        <Link to="/amplifiers" className='container__shop-category'> 
          <h1 className="text--image-centered">Shop Amplifiers</h1>
          <img className="image--shop-category" src={shopAmplifiers}></img>
        </Link>    
      </div>  
    </Fragment>
  )
}

export default Home;
