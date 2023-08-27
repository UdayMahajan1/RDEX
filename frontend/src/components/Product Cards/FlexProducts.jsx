import React from 'react'
import LeftGradient from '../Circular Gradients/LeftGradient'

export default function FlexProducts({ img, title, desc }) {
  return (
    <div className="container row mt-lg-5 mt-md-0 mt-sm-3 mt-3 pt-md-5 justify-content-md-between gap-3 text-white position-relative mx-lg-auto">
      <LeftGradient />
      <div className="col-md-5 transparent-background left-card-animation">
        <img src={img} className="img-fluid" alt="product"/>
      </div>
      <div className="col-md-6 my-auto right-card-animation">
        <h1 className="card-Title-flex fw-semibold heading-font">{title}</h1>
        <p className="card-desc mt-lg-4">{desc}</p>
        <a href="#" className="btn button btn-md rounded-pill px-4 py-2 mt-lg-4" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Coming Soon">Read more</a>
      </div>
    </div>
  )
}
