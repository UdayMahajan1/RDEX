import React, { useState } from 'react'
import aboutUsImg from '../img/about.png'
import RightGradient from './Circular Gradients/RightGradient';
import Vector from './Vector';

export default function AboutUs() {

  const [readMore, setReadMore] = useState(false);

  var addPara = readMore ? 'd-block' : 'd-none';
  var rightBody = readMore ? 'col-lg-12' : 'col-lg-6';
  var leftBody = readMore ? '' : 'd-lg-block';
  var button = readMore ? 'col-lg-2' : 'col-lg-5';
  var buttonText = readMore ? 'Read Less' : 'Read More';

  const readMoreHandler = () => {
    if (!readMore) {
      document.querySelector('.d-lg-block').classList.add('invisible');
      document.querySelector('.slide-left').classList.add('activate');
      document.querySelector('.slide-down').classList.add('activate');
      setTimeout(() => {
        setReadMore(true);
        document.querySelector('.slide-left').classList.remove('activate');
      }, 280);
    } else {
      document.querySelector('.slide-left').classList.add('reActivate');
      document.querySelector('.slide-down').classList.add('reActivate');
      setTimeout(() => {
        setReadMore(false);
        document.querySelector('.slide-left').classList.remove('reActivate');
      }, 230)
    }
  }

  return (
    <>
      <div className="position-relative about-us-margin">
        <RightGradient />
        <Vector sectionName='about us' />
        <div id="about" className="container-fluid pb-lg-5 p-sm-5 p-3 ms-0 mt-lg-4 card-bg rounded-5 row justify-content-center gap-lg-5 fade-in height-about-us overflow-hidden">
          <div className={"d-none col-lg-5 transparent-background align-self-center " + leftBody}>
            <div className='d-flex justify-content-center'>
              <img className="img-fluid pulsing-element img-enlarge" src={aboutUsImg} alt='gif' />
            </div>
          </div>
          <div className={rightBody + " col text-light mt-lg-3 mt-md-0 mt-2 pe-lg-5 ps-xl-3 text-lg-start align-self-center position-relative about-us-right-body slide-left overflow-hidden"}>
            <h1 className={"display-3 font-enlarge fw-semibold heading-font text-lg-start text-center"}>About us</h1>
            <div className='mb-5 pb-lg-4 pb-xl-5 pb-md-3 pb-sm-5 about-us-desc-height overflow-hidden'>
              <p className="mt-4 card-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mt-4 card-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className={"card-desc " + addPara}>
                Et netus et malesuada fames ac turpis egestas maecenas. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Maecenas sed enim ut sem viverra aliquet. Nulla facilisi nullam vehicula ipsum. Ipsum dolor sit amet consectetur adipiscing elit. Sagittis purus sit amet volutpat. Elit eget gravida cum sociis. Ipsum dolor sit amet consectetur adipiscing elit. Sagittis purus sit amet volutpat. Elit eget gravida cum sociis
              </p>
              {/* <div className="row justify-content-lg-start justify-content-center mt-5 gap-lg-5 text-lg-start text-center">
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
                </div> */}
              {/* <div className="row mt-lg-3 mt-sm-5 mt-3 mb-3 justify-content-lg-start justify-content-center"> */}
            </div>
            <div className="d-flex justify-content-lg-start justify-content-center position-absolute bottom-0 end-0 start-0 ps-lg-2">
              <button className={button + ' col-sm-5 col-10 btn button btn-lg rounded-pill px-4 py-2 slide-left slide-down'} onClick={readMoreHandler}>{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
