import React from 'react'
import aboutUsImg from '../img/about.png'

export default function AboutUs() {


  return (
    <>
      <div id="about" className="container-fluid mt-lg-5 mb-lg-3 mt-md-3 mt-2 mx-lg-auto ms-md-3 ms-2 row gap-lg-5 fade-in">
        <div className="col-lg transparent-background">
          <img className="img-fluid pulsing-element" src={aboutUsImg} alt='gif' />
        </div>
        <div className="col-lg text-light mt-lg-5 mt-md-3 mt-2 pe-lg-5 text-start">
          <h1 className="display-3 fw-semibold">About us</h1>
          <p className="mt-4 fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
          <p className="fs-5">Et netus et malesuada fames ac turpis egestas maecenas. Facilisis mauris sit amet massa vitae
            tortor
            condimentum lacinia quis. Maecenas sed enim ut sem viverra aliquet. Nulla facilisi nullam vehicula ipsum. Ipsum
            dolor sit amet consectetur adipiscing elit. Sagittis purus sit amet volutpat. Elit eget gravida cum sociis.
          </p>
          <div className="row justify-content-start mt-5">
            <div className="col-lg-4 col-md-3 col-5">
              <h1 id="stat1" className="display-4 fw-bolder stats">25M+</h1>
              <div className="w-100"></div>
              <p className="fs-4 stats-description">Transactions</p>
            </div>
            <div className="col-lg-4 col-5">
              <h1 id="stat2" className="display-4 fw-bolder stats">600K+</h1>
              <div className="w-100"></div>
              <p className="fs-4 stats-description">Subscribers</p>
            </div>
          </div>
          <div className="mt-3">
            <button className='btn btn-lg custom'>Read more</button>
          </div>
        </div>
      </div>
    </>
  )
}
