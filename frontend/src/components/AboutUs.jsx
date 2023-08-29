import React from 'react'
import aboutUsImg from '../img/about.png'
import RightGradient from './Circular Gradients/RightGradient';
import Vector from './Vector';

export default function AboutUs() {


  return (
    <>
      <div className="position-relative about-us-margin">
        <RightGradient />
        <Vector sectionName='about us' />
        <div id="about" className="container-fluid pb-lg-5 p-sm-5 p-3 ms-0 mt-lg-4 card-bg rounded-5 row justify-content-center gap-lg-5 fade-in">
          <div className="d-none d-lg-block col-lg-6 transparent-background">
            <img className="img-fluid pulsing-element" src={aboutUsImg} alt='gif'/>
          </div>
          <div className="col-lg-5 col text-light mt-lg-5 mt-md-3 mt-2 pe-lg-5 text-lg-start">
            <h1 className="display-3 fw-semibold heading-font text-lg-start text-center">About us</h1>
            <p className="mt-4 fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. </p>
            {/* <p className="fs-5">Et netus et malesuada fames ac turpis egestas maecenas. Facilisis mauris sit amet massa vitae
            tortor
            condimentum lacinia quis. Maecenas sed enim ut sem viverra aliquet. Nulla facilisi nullam vehicula ipsum. Ipsum
            dolor sit amet consectetur adipiscing elit. Sagittis purus sit amet volutpat. Elit eget gravida cum sociis.
          </p> */}
            <div className="row justify-content-lg-start justify-content-center mt-5 gap-lg-5 text-lg-start text-center">
              <div className="col-5">
                <h1 id="stat1" className="display-4 fw-bolder stats">25M+</h1>
                <div className="w-100"></div>
                <p className="fs-4 stats-description">Transactions</p>
              </div>
              <div className="col-5">
                <h1 id="stat2" className="display-4 fw-bolder stats">600K+</h1>
                <div className="w-100"></div>
                <p className="fs-4 stats-description">Subscribers</p>
              </div>
            </div>
            <div className="row mt-lg-3 mt-sm-5 mt-3 mb-3 justify-content-lg-start justify-content-center">
                <button className='col-sm-5 col-10 btn button btn-lg rounded-pill px-4 py-2' >Read more</button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
