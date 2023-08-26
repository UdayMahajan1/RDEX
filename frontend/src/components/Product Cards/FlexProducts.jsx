import React from 'react'
import LeftGradient from '../Circular Gradients/LeftGradient'

export default function FlexProducts({ img, title, desc }) {
  return (
    <div className="container row mt-lg-5 mt-md-0 mt-sm-3 mt-3 pt-md-5 justify-content-between gap-3 text-white position-relative">
      <LeftGradient />
      <div className="col-md-6 my-auto right-card-animation">
        <h1 className="card-Title-flex fw-semibold heading-font">{title}</h1>
        <p className="card-desc mt-lg-5">{desc}</p>
        <a href="#" className="btn button btn-lg rounded-pill px-4 py-2 mt-lg-4" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Coming Soon">Read more</a>
      </div>
      <div className="col-md-5 transparent-background left-card-animation">
        <img src={img} className="img-fluid" alt="product" />
      </div>
    </div>
  )
}
