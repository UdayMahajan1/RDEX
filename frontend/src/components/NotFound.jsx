import React from 'react'
import LeftGradient from './Circular Gradients/LeftGradient';
import RightGradient from './Circular Gradients/RightGradient';

export default function NotFound() {

  return (
    <div className="not-found">
      <div className="not-found-left-gradient">
        <LeftGradient />
      </div>
      <div className='row justify-content-center'>
        <div className="col-auto row justify-content-center gap-3 me-4">
          <div className='col-3 me-3' style={{paddingTop: '34px'}}>
            <p className='Style1'>4</p>
          </div>
          <div className='col-3'>
            <p className='Style2'>0</p>
          </div>
          <div className='col-3' style={{ paddingTop: '22px' }}>
            <p className='Style3'>4</p>
          </div>
        </div>
      </div>
      <div>
        <div className='text-center'>
          <p className='Style4'>OOPS...!</p>
          <p className='Style5'>Page not found</p>
          <p className='Style6'>Redirect to our homepage and find what you were looking for.</p>
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
