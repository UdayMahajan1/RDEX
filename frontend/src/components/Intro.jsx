import React from 'react'
import logo from '../img/originalLogoCropped.jpg'
// import logo from '../img/white dragon.png'
import RightGradient from './Circular Gradients/RightGradient'

export default function Intro() {

  return (
    <div className="position-relative overflow-hidden">
      <RightGradient />
      <div className="container-md container-fluid mx-md-auto mb-md-5 my-3 row gap-md-5 animate__animated animate__fadeIn position-relative">
        <div className="col-sm my-auto ms-lg-3 text-light">
          <h1 className="display-2 fw-bold heading-font">Rise of </h1>
          <h1 className="display-2 fw-bold heading-font" style={{ color: 'rgb(194,5,215)' }}>Decentralization</h1>
          <p className="my-4 fs-4 fw-light me-lg-5 text-white">A blockchain ecosystem offering unbeatable speed and the lowest fees, with top-level
            security
            and scalability.</p>
          <button type="button" className="btn button btn-lg rounded-pill px-4 py-2 mt-4 me-4">Whitepaper</button>
          <button type="button" className="btn button btn-lg rounded-pill px-4 py-2 mt-4 me-4">Blog link</button>
        </div>
        <div className="col-sm d-none d-lg-block">
          {/* <img className="img-fluid enlarge-icon logo-animation" src={logo} alt="logo" /> */}
          <img className="img-fluid rounded-circle logo-animation" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}
