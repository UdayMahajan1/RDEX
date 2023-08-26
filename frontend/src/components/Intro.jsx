import React from 'react'
// import logo from '../img/originalLogoCropped.jpg'
import logo from '../img/originalLogo.png'
// import logo from '../img/white dragon.png'
import RightGradient from './Circular Gradients/RightGradient'

export default function Intro() {

  return (
    <div className="position-relative pt-sm-4">
      <RightGradient />
      <div className="container-fluid intro-padding mb-md-1 my-md-3 row justify-content-md-between animate__animated animate__fadeIn position-relative">
        <div className="col-sm col-lg-5 col-md-10 my-auto ms-md-4 text-light">
          {/* <h1 className="fw-bold heading-font" style={{fontSize: '70px'}}>Rise of </h1> */}
          <h1 className="intro-heading-font fw-bold heading-font">Rise of </h1>
          {/* <h1 className="fw-bold heading-font" style={{ color: 'rgb(194,5,215)', fontSize: '70px' }}>Decentralization</h1> */}
          <h1 className="intro-heading-font fw-bold heading-font" style={{ color: 'rgb(194,5,215)' }}>Decentralization</h1>
          {/* <p className="my-4 intro-desc-font fw-light me-lg-5 ms-md-1 text-white">A blockchain ecosystem offering unbeatable speed and the lowest fees, with top-level
            security
            and scalability.</p> */}

          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <p className="my-4 intro-desc-font fw-light me-lg-5 ms-md-1 text-white">A blockchain ecosystem offering unbeatable speed and the lowest fees, with top-level
                  security
                  and scalability.</p>
              </div>
              <div class="carousel-item">
                <p className="my-4 intro-desc-font fw-light me-lg-5 ms-md-1 text-white">A blockchain ecosystem offering unbeatable speed and the lowest fees, with top-level
                  security
                  and scalability.</p>
              </div>
              <div class="carousel-item">
                <p className="my-4 intro-desc-font fw-light me-lg-5 ms-md-1 text-white">A blockchain ecosystem offering unbeatable speed and the lowest fees, with top-level
                  security
                  and scalability.</p>
              </div>
            </div>
          </div>

          <button type="button" className="btn button-whitepaper btn-lg rounded-pill px-4 py-2 mt-4 me-4">Whitepaper</button>
          <button type="button" className="btn button btn-lg rounded-pill px-4 py-2 mt-4 me-4">Blog link</button>
        </div>
        <div className="col-sm col-lg-6 d-none d-lg-block">
          {/* <img className="img-fluid enlarge-icon logo-animation" src={logo} alt="logo" /> */}
          <img className="img-fluid pulsing-element" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}
