import React from 'react'

export default function ProductCards({ id, img, title, desc }) {

  const animation = id % 2 === 0 ? 'left' : 'right';

  return (
    <div className="col-md-5 col-sm-9 mb-lg-2 mb-sm-5 mb-4 scaleUp">
      <div className={'card ' + animation + '-card-animation card-bg text-light rounded-5 p-lg-3 p-md-2 p-2'}>
        <img src={img} className="card-img rounded-5" alt="..." />
        <div className="card-body">
          <h1 className="card-Title fw-semibold heading-font">{title}</h1>
          <p className="card-desc mt-2"> {desc}
          </p>
          <button type="button" className="btn button btn-lg rounded-pill px-4 py-2 mt-2">Read more</button>
        </div>
      </div>
    </div>
  )
}
