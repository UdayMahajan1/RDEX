import React from 'react'
import LeftGradient from '../Circular Gradients/LeftGradient'

export default function FlexProducts({ img, title, desc }) {
  return (
    <div className="container-fluid row mt-5 pt-md-5 justify-content-center gap-3 position-relative">
      <LeftGradient />
      <div className="col-md-4 my-auto right-card-animation">
        <h1 className="fw-semibold heading-font">{title}</h1>
        <p className="mt-3">{desc}</p>
        <a href="#" className="btn button btn-lg rounded-pill px-4 py-2 mt-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Coming Soon">Read more</a>
      </div>
      <div className="col-md-6 transparent-background left-card-animation">
        <img src={img} className="img-fluid" alt="product" />
      </div>
    </div>
  )
}
