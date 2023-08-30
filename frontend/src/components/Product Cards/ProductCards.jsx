import React, { useState } from 'react';
import originalLogo from '../../img/white dragon.png';

export default function ProductCards({ id, img, title, desc, addDesc }) {

  const fadeInAnimation = id % 2 === 0 ? 'left' : 'right';
  const [active, setActive] = useState(false);
  const buttonText = active ? 'Read less' : 'Read more';

  const handleClick = () => {
    if (!active) {
      setActive(true);
    } else {
      document.querySelector('.fade-in-cards').classList.replace('fade-in-cards', 'deactivate');
      setTimeout(() => {
        setActive(false);
      }, 410)
    }
  }

  // testing a force push

  return (
    <div className="col-md-5 col-sm-9 mb-lg-2 mb-5 scaleUp overflow-hidden">
      <div className={'card ' + fadeInAnimation + '-card-animation card-bg card-height text-light border-0 rounded-5 p-lg-3 p-md-2 p-2 position-relative'}>
        {!active ?
          <div>
            <img src={img} className="card-img rounded-5 px-lg-5 px-md-0 px-5" alt="..." />
            <div className="card-body card-body-height">
              <h1 className="card-Title pt-lg-2 fw-semibold heading-font text-md-start text-center">{title}</h1>
              <p className="card-desc mt-2 pt-lg-2"> {desc} </p>
            </div>
          </div>
          :
          <div className='fade-in-cards'>
            <div className='row justify-content-lg-start ps-lg-3 ps-md-3 align-items-center'>
              <div className="col-3">
                {/* <img src={originalLogo} className='img-fluid px-lg-4 px-md-0 px-sm-2 px-3 mt-lg-1 mt-2' alt='...' /> */}
                <img src={originalLogo} className='img-fluid padding-card-top me-1 ms-0' alt='...' />
              </div>
              <div className="col-8">
                <h1 className="card-Title fw-semibold heading-font text-md-start mb-0">{title}</h1>
              </div>
            </div>
            <div className='card-body card-body-height-active'>
              <p className="card-desc mt-1 pt-lg-0 pt-md-1"> {addDesc} </p>
            </div>
          </div>
        }
        <div className='card-button-div container-fluid'>
          <div className="row justify-content-lg-start justify-content-evenly gap-lg-3 pt-2 px-lg-2 px-md-3 px-4 pb-0 mb-3 ms-lg-0 mt-lg-3">
            <button type="button" className="col-lg-5 btn button btn-md rounded-pill p-2 mt-2" onClick={handleClick}>{buttonText}</button>
            <button type="button" className="col-lg-5 btn button btn-md rounded-pill p-2 mt-2">Go to product</button>
          </div>
        </div>
      </div>
    </div>
  )
}
