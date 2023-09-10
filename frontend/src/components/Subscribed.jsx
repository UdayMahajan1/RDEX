import React from 'react';
import LeftGradient from './Circular Gradients/LeftGradient';
import RightGradient from './Circular Gradients/RightGradient';
import subscribedImg from '../img/subcribe.png'

export default function Subscribed() {
  return (
    <div className="not-found">
      <div className="not-found-left-gradient">
        <LeftGradient />
      </div>
      <div className='row justify-content-center subscribed-margin-top'>
        <div className="col-lg-2 col-sm-3 col-4">
          <img src={subscribedImg} className='img-fluid' alt=".." />
        </div>
      </div>
      <div className=''>
        <div className='text-center mt-lg-5 mt-md-3 mt-4 mx-3'>
          <p className='SStyle4'>Confirmed !</p>
          <p className='SStyle5'>Thanks for subscribing.</p>
          <p className='Style6'>Let the adventure begin.</p>
        </div>
        <div className="d-flex justify-content-center">
          <a href="/" className="btn button-back-to-homepage btn-md rounded-pill mt-3 text-uppercase py-3 px-4">Return to home page</a>
        </div>
      </div>
      <div className="not-found-right-gradient">
        <RightGradient />
      </div>
    </div>
  )
}
