import React, { useState } from 'react';
import originalLogo from '../../img/white dragon.png';

export default function ProductCards({ id, img, title, desc, addDesc }) {

  const fadeInAnimation = id % 2 === 0 ? 'left' : 'right';
  const [active, setActive] = useState(false);
  const buttonText = active ? 'Read less' : 'Read more';

  const handleClick = () => {
    if(!active) {
      setActive(true);
    } else {
      document.querySelector('.fade-in-cards').classList.replace('fade-in-cards', 'deactivate');
      setTimeout(() => {
        setActive(false);
      }, 200)
    }
  }

  // 

  return (
    <div className="col-md-5 col-sm-9 mb-lg-2 mb-5 scaleUp overflow-hidden">
      <div className={'card ' + fadeInAnimation + '-card-animation card-bg text-light border-0 rounded-5 p-lg-3 p-md-2 p-2'}>
        {!active ?
          <div>
            <img src={img} className="card-img rounded-5 px-lg-5 px-md-0 px-5" alt="..." />
            <div className="card-body card-body-height">
              <h1 className="card-Title p-lg-2 fw-semibold heading-font text-md-start text-center">{title}</h1>
              <p className="card-desc mt-2 p-lg-2"> {desc} </p>
            </div>  
          </div>
          :
          <div className={'fade-in-cards'}>
            <div className='row justify-content-lg-between px-lg-0 ps-md-3'>
              <div className="col-lg-4 col-3">
                {/* <img src={originalLogo} className='img-fluid px-lg-4 px-md-0 px-sm-2 px-3 mt-lg-1 mt-2' alt='...' /> */}
                <img src={originalLogo} className='img-fluid padding-card-top mt-lg-1 mt-2' alt='...' />
              </div>
              <div className="col-8">
                <h1 className="card-Title fw-semibold my-3 heading-font text-md-start">{title}</h1>
              </div>
            </div>
            <div className='card-body card-body-height-active'>
              <p className="card-desc mt-2 p-lg-3 p-md-1"> {addDesc} </p>
            </div>
          </div>
        }
        <div className="row justify-content-lg-start justify-content-evenly gap-lg-3 pt-2 px-lg-3 px-4 pb-lg-0 pb-md-2 pb-sm-3 mb-3 ms-lg-1 mt-lg-3">
          <button type="button" className="col-lg-5 btn button btn-md rounded-pill px-4 py-2 mt-2" onClick={handleClick}>{buttonText}</button>
          <button type="button" className="col-lg-5 btn button btn-md rounded-pill px-4 py-2 mt-2">Go to product</button>
        </div>
      </div>
    </div>
  )
}
