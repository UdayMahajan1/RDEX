import React from 'react'

export default function FlexProducts({ img, title, desc }) {
  return (
    <div className="container-fluid flex-products-padding row mt-lg-5 mt-md-0 mt-sm-3 mt-3 pt-md-5 justify-content-md-between justify-content-xl-center gap-3 text-white position-relative mx-lg-auto">
      <div className="col-md-5 transparent-background left-card-animation d-flex justify-content-center">
        <img src={img} className="img-fluid" alt="product" />
      </div>
      <div className="col-md-6 my-auto right-card-animation">
        <div>
          <h1 className="card-Title-flex fw-semibold heading-font text-start">{title}</h1>
          <p className="card-desc mt-lg-4 text-start">{desc}</p>
          <div className="d-flex justify-content-start">
            <a href="#" className="btn button btn-md rounded-pill px-4 py-2 mt-lg-4" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Coming Soon">Go to product</a>
          </div>
        </div>
      </div>
    </div>
  )
}
