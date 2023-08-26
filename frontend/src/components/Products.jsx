import React from 'react'
import InfoProducts from './Product Cards/infoProducts'
import ProductCards from './Product Cards/ProductCards'
import FlexProducts from './Product Cards/FlexProducts'
import InfoFlexProducts from './Product Cards/infoFlexProducts'
import LeftGradient from './Circular Gradients/LeftGradient';
import RightGradient from './Circular Gradients/RightGradient';

export default function Products() {
  return (
    <>
      <div id="products" className="container-fluid nav-padding text-light position-relative">
        <LeftGradient />
        <h1 className="section-heading-font ms-lg-5 ms-md-2 fw-semibold heading-font mb-5 fade-in">Products</h1>
        <div className="row justify-content-evenly gap-lg-5 mx-lg-2 topMarginForRow position-relative">
          {
            InfoProducts.map((card, index) => {
              return (
                <ProductCards key={index} id={index} img={card.img} title={card.title} desc={card.desc} />
              )
            })
          }
          <div className='position-absolute top-50 start-50 translate-middle'>
            <RightGradient />
          </div>
        </div>
      </div>
      <div className="container-fluid nav-padding">
        {/* <div id="carouselExampleFade" class="carousel slide carousel-fade">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className='d-block w-50' style={{ height: '400px' }}></div>
            </div>
            <div class="carousel-item">
              <div className='d-block w-50' style={{ height: '400px' }}></div>
            </div>
            <div class="carousel-item">
              <div className='d-block w-50' style={{ height: '400px' }}></div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}
        {
          InfoFlexProducts.map((card, index) => {
            return (
              <FlexProducts key={index} img={card.img} title={card.title} desc={card.desc} />
            )
          })
        }
      </div>
    </>
  )
}
