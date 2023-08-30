import React from 'react'
import InfoProducts from './Product Cards/infoProducts'
import ProductCards from './Product Cards/ProductCards'
import FlexProducts from './Product Cards/FlexProducts'
import InfoFlexProducts from './Product Cards/infoFlexProducts'
import LeftGradient from './Circular Gradients/LeftGradient';
import RightGradient from './Circular Gradients/RightGradient';
import CarouselComp from './CarouselComp'
import Vector from './Vector'

export default function Products() {

  return (
    <>
      <div className="container-fluid position-relative nav-padding text-light">
        <LeftGradient />
        <Vector sectionName='products' />
        <h1 className="section-heading-font ms-lg-5 ms-md-4 fw-semibold heading-font mb-5 fade-in text-md-start text-center">Products</h1>
        <div id="products" className="row justify-content-evenly gap-lg-5 mx-lg-2 topMarginForRow position-relative">
          {
            InfoProducts.map((card, index) => {
              return (
                <ProductCards key={index} id={index} img={card.img} title={card.title} desc={card.desc} addDesc={card.addDesc} />
              )
            })
          }
          <div className='position-absolute top-50 start-50 translate-middle'>
            <RightGradient />
          </div>
        </div>
      </div>
      <div className="container-fluid flex-products-padding mt-lg-5">
        {/* <div className="w-lg-100"> */}
          {/* <CarouselComp> */}
            {
              InfoFlexProducts.map((card, index) => {
                return (
                  <FlexProducts key={index} img={card.img} title={card.title} desc={card.desc} />
                )
              })
            }
          {/* </CarouselComp> */}
        {/* </div> */}
      </div>
    </>
  )
}
