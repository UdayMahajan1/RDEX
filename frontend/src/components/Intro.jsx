import React from 'react'
import logo from '../img/originalLogoCropped.jpg'
// import logo from '../img/white dragon.png'

export default function Intro() {

  return (
    <div className="container-fluid mx-md-auto ms-3 mb-md-5 m-3 w-75 row gap-md-5 animate__animated animate__fadeIn">
      <div className="col-sm my-auto text-light">
        <h1 className="display-2 fw-semibold">Rise of decentralization</h1>
        <p className="my-4 fs-5 fw-normal">A blockchain ecosystem offering unbeatable speed and the lowest fees, with top-level
          security
          and scalability.</p>
        <button type="button" className="btn btn-outline-info btn-lg mt-4 me-4">Whitepaper</button>
        <button type="button" className="btn btn-outline-info btn-lg mt-4">Read documentation</button>
      </div>
      <div className="col-sm d-none d-lg-block">
        {/* <img className="img-fluid enlarge-icon logo-animation" src={logo} alt="logo" /> */}
        <img className="img-fluid rounded-circle logo-animation" src={logo} alt="logo" />
      </div>
    </div>
  )
}
