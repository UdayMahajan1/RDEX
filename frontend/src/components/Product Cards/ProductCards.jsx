import React from 'react'

export default function ProductCards({id, img, title, desc}) {

  const animation = id%2===0 ? 'left' : 'right';

  return (
    <div className="col-lg-5 scaleUp">
      <div className={'card '+animation+'-card-animation transparent-background text-light card-border rounded-4 p-3'}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-title fw-semibold">{title}</h1>
          <p className="card-text mt-2"> {desc}
          </p>
          <a href="#" className="btn outline-custom mt-2">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}
