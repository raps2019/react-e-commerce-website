import React, {Fragment} from 'react'
import shopSpeakers from '../images/homepage/shopSpeakers.jpg'
import shopAmplifiers from '../images/homepage/shopAmplifiers.png'

const Home = () => {
  return (
    <Fragment>
      <div className="container__home-page">
        <div className='container__shop-category'>
          <h1 className="text--image-centered">Shop Speakers</h1>
          <img className="image--shop-category" src={shopSpeakers}></img>
        </div>
        <div className='container__shop-category'>
          <h1 className="text--image-centered">Shop Amplifiers</h1>
          <img className="image--shop-category" src={shopAmplifiers}></img>
        </div>
      </div>      
    </Fragment>
  )
}

export default Home;
