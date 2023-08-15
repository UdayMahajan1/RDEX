import React from 'react';
// import originalLogo from '../img/originalLogo.jpg'
import originalLogo from '../img/white dragon.png';

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-dark pt-3 px-md-5 px-3 sticky-lg-top" data-bs-theme="dark">
      <div className="container-fluid">
        {/* <a className="navbar-brand me-lg-5 px-lg-5 fs-3" href="#">RDEX</a> */}
        <a href='#'><img src={originalLogo} className="navbar-icon px-lg-4 rounded-circle navbar-icon"
          alt='..' /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav gap-lg-4">
            <a className="nav-link fs-5 fw-normal" href="#products">Products</a>
            <a className="nav-link fs-5 fw-normal" href="#about">About us</a>
            <a className="nav-link fs-5 fw-normal" href="#roadmap">Roadmap</a>
            <a className="nav-link fs-5 fw-normal" href="#tokenomics">Tokenomics</a>
            <a className="nav-link fs-5 fw-normal" href="#footer">Reach us</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
