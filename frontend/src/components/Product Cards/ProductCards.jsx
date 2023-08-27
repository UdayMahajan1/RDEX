import React, { useState } from 'react';
import originalLogo from '../../img/white dragon.png';

export default function ProductCards({ id, img, title, desc, addDesc }) {

  const animation = id % 2 === 0 ? 'left' : 'right';
  const [active, setActive] = useState(false);
  const buttonText = active ? 'Read less' : 'Read more';

  const handleClick = () => {
    setActive(!active);
  }

  return (
    <div className="col-md-5 col-sm-9 mb-lg-2 mb-sm-5 mb-4 scaleUp">
      <div className={'card ' + animation + '-card-animation card-bg text-light rounded-5 p-lg-3 p-md-2 p-2'}>
        {!active ?
          <div>
            <img src={img} className="card-img rounded-5" alt="..." />
            <div className="card-body card-body-height">
              <h1 className="card-Title fw-semibold heading-font text-md-start text-center">{title}</h1>
              <p className="card-desc mt-2"> {desc} </p>
            </div>
          </div>
          :
          <div>
            <div className='row justify-content-lg-between'>
              <div className="col-3">
                <img src={originalLogo} className='img-fluid px-lg-4' alt='...' />
              </div>
              <div className="col-8">
                <h1 className="card-Title fw-semibold my-3 heading-font text-md-start">{title}</h1>
              </div>
            </div>
            <div className='card-body card-body-height-active'>
              <p className="card-desc mt-2 p-3"> {addDesc} </p>
            </div>
          </div>
        }
        <div className="row justify-content-lg-start justify-content-evenly gap-lg-3 pt-2 px-3">
          <button type="button" className="col-lg btn button btn-md rounded-pill px-4 py-2 mt-2" onClick={handleClick}>{buttonText}</button>
          <button type="button" className="col-lg btn button btn-md rounded-pill px-4 py-2 mt-2">Go to product</button>
        </div>
      </div>
    </div>
  )
}
