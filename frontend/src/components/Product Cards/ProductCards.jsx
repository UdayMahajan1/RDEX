import React from 'react'

export default function ProductCards({ id, img, title, desc }) {

  const animation = id % 2 === 0 ? 'left' : 'right';

  return (
    <div className="col-lg-5 scaleUp">
      <div className={'card ' + animation + '-card-animation card-bg text-light rounded-5 p-3'}>
        <img src={img} className="card-img-top rounded-5" alt="..." />
        <div className="card-body">
          <h1 className="card-title fw-semibold heading-font">{title}</h1>
          <p className="card-text mt-2"> {desc}
          </p>
          <button type="button" className="btn button btn-lg rounded-pill px-4 py-2 mt-2">Read more</button>
        </div>
      </div>
    </div>
  )
}
