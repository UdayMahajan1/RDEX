import React from 'react';
// import originalLogo from '../img/originalLogo.jpg'
import originalLogo from '../img/white dragon.png';

export default function Navbar() {

  return (
    // <nav className="navbar navbar-expand-lg bg-Dark py-3 px-md-5 px-3 sticky-lg-top">
    <nav className="navbar navbar-expand-md bg-Dark py-sm-3 py-lg-1 py-md-2 nav-padding sticky-md-top">
      <div className="container-fluid">
        {/* <a className="navbar-brand me-lg-5 px-lg-5 fs-3" href="#">RDEX</a> */}
        <a href='#'><img src={originalLogo} className="navbar-icon px-lg-3 px-md-0 px-sm-1 rounded-circle"
          alt='..' /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {/* <div className="navbar-nav gap-lg-4 left-margin-for-nav-links"> */}
          <div className="navbar-nav gap-lg-5 gap-md-2 mx-md-auto">
            <a className="nav-link navbar-link-font fw-semibold text-white" href="#products">Products</a>
            <a className="nav-link navbar-link-font fw-semibold text-white" href="#about">About us</a>
            <a className="nav-link navbar-link-font fw-semibold text-white" href="#roadmap">Roadmap</a>
            <a className="nav-link navbar-link-font fw-semibold text-white" href="#tokenomics">Tokenomics</a>
            <a className="nav-link navbar-link-font fw-semibold text-white" href="#footer">Reach us</a>
            <div className="d-md-none d-sm-block">
              <a href='#subscribe' className="btn nav-button btn-lg rounded-pill px-5 py-2">Subscribe</a>
            </div>
          </div>
        </div>
        <div className="d-flex d-none d-md-block">
          <a href='#subscribe' className="btn nav-button btn-lg rounded-pill px-5 py-2">Subscribe</a>
        </div>
      </div>
    </nav>
  )
}
