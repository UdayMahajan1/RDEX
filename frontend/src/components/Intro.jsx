import React from 'react'
// import logo from '../img/originalLogoCropped.jpg'
import logo from '../img/originalLogo.png'
// import logo from '../img/white dragon.png'
import RightGradient from './Circular Gradients/RightGradient'

export default function Intro() {

  return (
    <div className="position-relative pt-sm-4 pt-5">
      <RightGradient />
      <div className="container-fluid intro-padding mt-md-3 row justify-content-lg-between justify-content-evenly animate__animated animate__fadeIn position-relative text-center text-md-start">
        <div className="col-sm-11 col-md-5 my-auto ms-md-4 text-light">
          {/* <h1 className="fw-bold heading-font" style={{fontSize: '70px'}}>Rise of </h1> */}
          <h1 className="intro-heading-font fw-bold heading-font">Rise of </h1>
          {/* <h1 className="fw-bold heading-font" style={{ color: 'rgb(194,5,215)', fontSize: '70px' }}>Decentralization</h1> */}
          <h1 className="intro-heading-font fw-bold heading-font" style={{ color: '#C304D7' }}>Decentralization</h1>
          {/* <p className="my-4 intro-desc-font fw-light me-lg-5 ms-md-1 text-white">A blockchain ecosystem offering unbeatable speed and the lowest fees, with top-level
            security
            and scalability.</p> */}

          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <p className="my-4 my-md-2 intro-desc-font fw-normal me-lg-5 ms-md-1 text-white">A blockchain ecosystem offering unbeatable speed and the lowest fees, with top-level
                  security
                  and scalability.</p>
              </div>
              <div className="carousel-item">
                <p className="my-4 my-md-2 intro-desc-font fw-normal me-lg-5 ms-md-1 text-white">A blockchain ecosystem offering unbeatable speed and the lowest fees, with top-level
                  security
                  and scalability.</p>
              </div>
              <div className="carousel-item">
                <p className="my-4 my-md-2 intro-desc-font fw-normal me-lg-5 ms-md-1 text-white">A blockchain ecosystem offering unbeatable speed and the lowest fees, with top-level
                  security
                  and scalability.</p>
              </div>
            </div>
          </div>
          <div className="mx-md-0 mx-auto mt-lg-3">
            <button type="button" className="btn button-whitepaper btn-lg border-0 rounded-pill px-lg-5 text-center mt-4 me-lg-3 me-md-2 me-4" >Whitepaper</button>
            <button type="button" className="btn button btn-lg rounded-pill px-lg-5 text-center mt-4">Blog link</button>
          </div>
        </div>
        <div className="col-sm col-md-5 col-lg-6 d-none d-md-block">
          {/* <img className="img-fluid enlarge-icon logo-animation" src={logo} alt="logo" /> */}
          <div className="row justify-content-lg-center">
            <div className='col-lg-auto'>
              <img className="img-fluid pulsing-element" src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
